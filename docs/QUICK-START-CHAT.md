# Chat System - Quick Start Guide

## Problem & Solution in 30 Seconds

### ❌ Problem
Multiple users' messages appeared together without isolation.

### ✅ Solution
Added three-layer filtering to ensure complete user isolation:
1. Database level (MongoDB query)
2. API level (backend filtering)
3. Frontend level (validation)

---

## How Users Get Isolated

### Step 1: Unique Visitor ID
```javascript
// First visit - browser generates unique ID
localStorage.setItem('visitorId', 'visitor_1674523847291_x7a9k2m1')

// Persists across sessions
// Same user always has same ID in same browser
```

### Step 2: Messages Filtered by ID
```javascript
// Backend queries only this user's messages
Message.find({visitorId: "visitor_1674523847291_x7a9k2m1"})

// User 2 gets different set
Message.find({visitorId: "visitor_1674523900105_y5b2c3m9"})
```

### Step 3: Frontend Validates Match
```javascript
if (data.visitorId === currentVisitorId) {
  // ✅ This is MY conversation, display it
  setMessages(data.messages)
} else {
  // ❌ Wrong conversation, something is wrong
  console.error("Chat mismatch!")
}
```

---

## For Users

### Opening Chat
```
1. Click Chat button
2. A unique visitorId is generated (happens automatically)
3. All your messages are linked to this ID
4. You only see your messages
5. Other users' messages are hidden
```

### Real-Time Updates
```
Your messages update every 2 seconds
If admin replies, you see it in real-time
You never see other users' messages
```

---

## For Admins

### Login
```
Email: admin@tryqu.tech
Password: Admin@12345

Generates consistent adminId (same every login)
Token expires in 24 hours
```

### View Conversations
```
GET /api/admin/chats returns all conversations:
├─ User 1 (visitor_xxx1) - 5 messages, unread: 0
├─ User 2 (visitor_xxx2) - 3 messages, unread: 2
└─ User 3 (visitor_xxx3) - 7 messages, unread: 1
```

### Select a User
```
Click on User 1
GET /api/chat/history?visitorId=visitor_xxx1
Shows ONLY User 1's messages
User 2's messages completely hidden
```

### Reply to User
```
Type response: "How can I help?"
Send with isAdmin=true
Your reply marked as "admin"
NO auto-reply sent (user gets real response)
Chat marked as assigned to you
```

### Switch to Different User
```
Click on User 2
Previous conversation completely hidden
New conversation loaded (only User 2's messages)
Complete isolation
```

---

## Key Fields

### User Identification
```
visitorId: "visitor_1674523847291_x7a9k2m1"
├─ Generated once per browser
├─ Stored in localStorage
├─ Used to filter all messages
└─ Unique across all users
```

### Admin Identification
```
adminId: "admin_admin_tryqu_tech"
├─ Generated from email
├─ Same every login (not random)
├─ Used to track who handled what
└─ Verified with token
```

### Conversation Tracking
```
Chat {
  visitorId: "visitor_xxx1",      // User identifier
  assignedTo: "admin_admin_xxx",  // Which admin handling
  readAt: "2024-01-23T10:30:00Z", // When opened
  unreadCount: 0                  // Unread messages
}
```

---

## API Quick Reference

### User Endpoints
```
GET /api/chat/history?visitorId=xxx
├─ Returns only this user's messages
├─ User can access their own
└─ Admin can access any with token

POST /api/chat/send
├─ {content, visitorId, isAdmin: false}
├─ Creates message
├─ Sends auto-reply
└─ Updates unread count
```

### Admin Endpoints
```
POST /api/auth/admin-login
├─ {email, password}
└─ Returns token + adminId

GET /api/admin/chats
├─ Returns all conversations
├─ Shows assignment status
└─ Shows unread counts

POST /api/chat/send (as admin)
├─ {content, visitorId, adminId, isAdmin: true, token}
├─ Creates admin message
├─ NO auto-reply
└─ Marks chat as assigned
```

---

## Testing (5 minutes)

### Test 1: Isolation
```
1. Clear browser storage (F12 → Storage → Clear)
2. Send message: "User 1"
3. See auto-reply and visitorId in console
4. Clear storage again (new user)
5. Send message: "User 2"
6. Verify User 2 doesn't see User 1's messages
✅ Success: Each user sees only their messages
```

### Test 2: Real-Time
```
1. Open chat in Window 1 (User 1)
2. Open chat in Window 2 (clear storage first, User 2)
3. User 2 sends: "Hello"
4. Wait 2 seconds
5. User 1 window - should NOT show "Hello"
6. User 2 window - should show "Hello"
✅ Success: Real-time without cross-talk
```

### Test 3: Admin
```
1. Click Chat → Admin button
2. Login with admin credentials
3. See list of all users on left
4. Click User 1 → see their messages
5. Click User 2 → User 1's messages disappear
6. Type reply, send
7. Message shows with "admin" label
✅ Success: Admin can manage users separately
```

---

## Files to Know

| File | Purpose |
|------|---------|
| `components/chatbot-modal-v2.tsx` | Main chat UI |
| `app/api/chat/history/route.ts` | Get messages |
| `app/api/chat/send/route.ts` | Send messages |
| `app/api/admin/chats/route.ts` | Admin dashboard data |
| `lib/models/Chat.ts` | Chat database schema |
| `lib/models/Message.ts` | Message database schema |

---

## Debugging Tips

### "I see other users' messages"
```
Check browser console:
- Look for [ERROR] or [SECURITY] messages
- Check visitorId matches in logs
- Try clearing localStorage and refresh
```

### "Admin can't see conversations"
```
Check:
- Admin is logged in (token in localStorage)
- No [ERROR] messages in console
- Try different user from the list
```

### "Messages not updating in real-time"
```
Check:
- Polling is running (should see [CHAT-HISTORY] logs every 2 sec)
- Network tab shows requests
- Database contains messages
```

---

## Common Errors & Fixes

### Error: "Chat mismatch!"
```
Cause: Wrong visitorId returned
Fix: Refresh page, clear storage if needed
```

### Error: "Unauthorized"
```
Cause: Admin token expired
Fix: Re-login to admin account
```

### No auto-reply showing
```
Check: 
- Not admin (if admin, no auto-reply expected)
- Wait 2 seconds for polling
- Check database has message
```

---

## Architecture Overview

```
User Browser (visitor_xxx)
        ↓
   Send Message
        ↓
   Backend API
   └─ Verify visitorId
   └─ Create Message doc
   └─ Create/Update Chat doc
   └─ Send auto-reply
        ↓
    Database
    └─ Message: {visitorId: xxx, ...}
    └─ Chat: {visitorId: xxx, ...}
        ↓
   Frontend Polling (every 2 sec)
   └─ GET /api/chat/history?visitorId=xxx
   └─ Verify visitorId matches
   └─ Display messages
        ↓
    User Sees Message in Real-Time
```

---

## Success Checklist

✅ Users see only their own messages
✅ Real-time updates every 2 seconds
✅ No cross-user message mixing
✅ Admin can view all users separately
✅ Admin replies work correctly
✅ Complete data isolation
✅ Database properly indexed
✅ All endpoints working

---

## Need More Details?

- **Full Implementation:** `docs/CHAT-SYSTEM-COMPLETE.md`
- **Testing Procedures:** `docs/TESTING-CHAT-ISOLATION.md`
- **Technical Details:** `docs/CHAT-ISOLATION-FIX.md`
- **User Tracking:** `docs/CHAT-USER-IDENTIFICATION.md`
- **Summary:** `CHAT-UPDATES-SUMMARY.md`

---

## TL;DR

**Problem:** All users' messages mixed together

**Solution:** Three-layer filtering
1. Database: `Message.find({visitorId})`
2. API: `.filter(msg => msg.visitorId === xxx)`
3. Frontend: `if (data.visitorId === visitorId)`

**Result:** Each user sees only their messages, completely isolated, real-time updates working correctly, admin can manage users separately.

**Status:** ✅ Complete and ready to deploy
