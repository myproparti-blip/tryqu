# Badge Count Logic - Real-Time Updates

## Overview

The badge count shows unread messages only from the OTHER party:
- **User side**: Shows unread messages from Admin ONLY (not bot auto-responses)
- **Admin side**: Shows unread messages from Users ONLY

## Key Rules

✅ **INCREMENT Badge Count**: Only on incoming admin/user messages
- User receives ADMIN message → +1 unread (bot auto-responses don't count)
- Admin receives USER message → +1 unread

❌ **DO NOT INCREMENT**: 
- Bot auto-responses (don't count towards user badge)
- User's own messages (admin's own messages)
- Admin's own messages (user's own messages)

🔄 **RESET Badge Count**: When chat window is opened
- User opens chat → Mark all admin messages as read → Badge = 0
- Admin opens chat → Mark all user messages as read → Badge = 0

## Architecture

### Database Layer

**Message Model** (`lib/models/Message.ts`):
```typescript
- sender: "user" | "admin" | "bot"
- isRead: boolean (default: false)
- readBy: "user" | "admin"
- readAt: Date
```

**Chat Model** (`lib/models/Chat.ts`):
```typescript
- unreadCount: number (deprecated - now calculated from messages)
- lastMessageSender: "user" | "admin" | "bot"
- lastMessageTime: Date
```

### API Endpoints

**POST /api/chat/send** - Send a message
- Creates message with `isRead: false`
- Does NOT modify `chat.unreadCount`
- Broadcasts real-time update via SSE

**POST /api/chat/mark-read** - Mark messages as read
```typescript
// User marks admin/bot messages as read
POST /api/chat/mark-read
{ visitorId, isAdmin: false }

// Admin marks user messages as read
POST /api/chat/mark-read
{ visitorId, isAdmin: true }
```

**GET /api/admin/chats** - Get all conversations with unread counts
- Uses aggregation to count unread messages
- Admin unread = count of messages where `sender: "user"` AND `isRead: false`

**GET /api/chat/history** - Get chat messages for a visitor
- Returns all messages with their `isRead` status
- User calculates unread = count of admin/bot messages with `isRead: false`

**GET /api/chat/subscribe** - Server-Sent Events (SSE) for real-time updates
- Establishes persistent connection to client
- Broadcasts `new_message` events immediately
- Keeps connection alive with 30-second heartbeat

### Frontend Hooks

**useRealTimeUnreadCount** (`hooks/useRealTimeUnreadCount.ts`):
```typescript
// Real-time updates via SSE + fallback polling
const { userUnread, adminUnread, refetch } = useRealTimeUnreadCount(visitorId, isAdmin)

// For users: SSE listens for new ADMIN messages only (not bot)
// For admin: Uses polling (every 3 seconds) for user messages
// Fallback: If SSE fails, polling kicks in immediately
```

**Old Hook** (`hooks/useUnreadCount.ts`):
- Polling only (every 3 seconds)
- Used as fallback if SSE unavailable
- Still functional but slower

### Flow Diagram

```
User sends message
    ↓
[POST /api/chat/send]
    ↓
Create message (isRead: false, sender: "user")
    ↓
Broadcast SSE "new_message" to admins
    ↓
Admin receives SSE update (real-time)
    ↓
Admin badge updates immediately (+1)

---

Admin sends message
    ↓
[POST /api/chat/send]
    ↓
Create message (isRead: false, sender: "admin")
    ↓
Broadcast SSE "new_message" to user
    ↓
User SSE listener receives update
    ↓
User badge updates immediately (+1)

---

User opens chat
    ↓
Modal opens
    ↓
[POST /api/chat/mark-read] (isAdmin: false)
    ↓
Update: sender in ["admin", "bot"] AND isRead: false → isRead: true
    ↓
[GET /api/chat/history] refetch
    ↓
Count unread admin/bot messages = 0
    ↓
Badge resets to 0

---

Admin opens conversation
    ↓
Modal opens + conversation selected
    ↓
[POST /api/chat/mark-read] (isAdmin: true)
    ↓
Update: sender: "user" AND isRead: false → isRead: true
    ↓
[GET /api/admin/chats] refetch
    ↓
Aggregation counts unread user messages = 0
    ↓
Badge resets to 0
```

## Real-Time Update Flow

### Server-Sent Events (SSE)

1. **Client subscribes**: `new EventSource("/api/chat/subscribe?visitorId=xxx")`
2. **Server keeps connection open**: Maintains Set of controllers per visitorId
3. **Message sent**: `broadcastUpdate(visitorId, { type: "new_message", ... })`
4. **Server sends to all subscribers**: Encodes as SSE message
5. **Client receives**: `onmessage` event triggers
6. **Client refetches**: Immediately gets updated count

### Fallback Polling

If SSE fails (network issue, browser limit):
- Polling interval kicks in: every 3 seconds
- Fetches current unread count from server
- Updates UI only if count changed

### Why SSE over WebSockets?

- ✅ Works with Next.js App Router (no additional packages)
- ✅ Automatic reconnection
- ✅ Lighter weight for this use case
- ✅ Unidirectional (server → client) which is all we need
- ✅ No CORS issues
- ✅ Browser support is excellent

## Testing

### Debug Endpoint

```bash
# Get all conversations summary
GET /api/debug/badge

# Get specific visitor details
GET /api/debug/badge?visitorId=visitor_123
```

Returns:
```json
{
  "visitorId": "visitor_123",
  "totalMessages": 10,
  "userMessages": 3,
  "adminMessages": 5,
  "botMessages": 2,
  "unreadCount": 2,
  "messages": [
    {
      "id": "msg_xxx",
      "sender": "admin",
      "content": "...",
      "isRead": false,
      "readBy": null,
      "readAt": null
    }
  ]
}
```

### Console Logs to Monitor

```
[SSE] Connected to real-time updates for: visitor_123
[SSE] New message received, refetching count...
[USER-BADGE] Visitor: visitor_123, Unread: 2
[ADMIN-BADGE] Total unread messages: 5
[REALTIME-HOOK] Manual refetch triggered
```

## Common Issues & Fixes

### Issue: Badge doesn't update immediately
**Solution**: Check browser console for SSE errors
- If SSE error → polling fallback activates (3 sec delay)
- If polling fails → check `/api/admin/chats` or `/api/chat/history` endpoints

### Issue: Badge shows wrong count
**Solution**: Check message `isRead` status in database
```bash
# Check specific visitor's messages
GET /api/debug/badge?visitorId=visitor_123

# Look for messages with isRead: false
```

### Issue: Badge doesn't reset when opening chat
**Solution**: Verify `/api/chat/mark-read` is called
- Check network tab for POST request
- Verify response shows `markedCount > 0`

## Performance Considerations

- **Message sending**: Broadcast is async (doesn't block response)
- **SSE connections**: Limited per browser (typically 6 concurrent)
- **Polling fallback**: 3-second interval to balance responsiveness and load
- **Database queries**: Optimized indexes on `isRead`, `sender`, `visitorId`

## Migration Notes

Old `useUnreadCount` hook still works but:
- Only uses polling (slower)
- Recommended to replace with `useRealTimeUnreadCount`
- Keep old hook as fallback in case SSE fails
