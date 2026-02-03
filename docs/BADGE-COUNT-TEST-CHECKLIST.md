# Badge Count - Test Checklist

## Pre-Deployment Tests

### 1. Code Review
- [ ] `app/api/chat/subscribe/route.ts` created ✓
- [ ] `hooks/useRealTimeUnreadCount.ts` created ✓
- [ ] `components/floating-chat-icon.tsx` updated to use new hook ✓
- [ ] `app/api/chat/send/route.ts` has broadcastUpdate call ✓
- [ ] No TypeScript errors in new files
- [ ] No console warnings on build

### 2. Local Development Test

#### Setup
```bash
npm run dev
# Start application
```

#### Test 2.1: User Sends Message
- [ ] Open user chat, type message
- [ ] Send message
- [ ] Open DevTools → Console
- [ ] **Check**: See `[SSE] New message received, refetching count...`
- [ ] Message appears in chat
- [ ] No errors in console
- [ ] Database: Message saved with `isRead: false`

#### Test 2.2: Admin Receives Update
- [ ] Keep user message on screen
- [ ] Open separate browser/incognito: Admin dashboard
- [ ] **Check**: Admin badge shows +1 immediately (within 1 second)
- [ ] **Check**: Admin console shows `[SSE] New message received...`
- [ ] In `/api/debug/badge?visitorId=xxx`: User message has `isRead: false`

#### Test 2.3: Admin Sends Message
- [ ] Admin: Type and send response message
- [ ] User chat is open/visible
- [ ] **Check**: User badge shows +1 immediately
- [ ] **Check**: User sees new message appear
- [ ] **Check**: User console shows SSE activity
- [ ] Database: Admin message saved with `isRead: false`

#### Test 2.4: User Opens Chat
- [ ] User has unread admin messages (badge > 0)
- [ ] User clicks chat icon
- [ ] **Check**: Chat modal opens
- [ ] **Check**: Console shows `[MARK-READ] User marked X messages...`
- [ ] **Check**: Badge immediately becomes 0
- [ ] **Check**: All admin messages show `isRead: true` in database

#### Test 2.5: Admin Opens Conversation
- [ ] Admin has unread user messages (badge > 0)
- [ ] Admin clicks conversation from list
- [ ] **Check**: Conversation details open
- [ ] **Check**: Console shows `[MARK-READ] Admin marked X messages...`
- [ ] **Check**: Badge for that conversation becomes 0
- [ ] **Check**: All user messages have `isRead: true` in database

#### Test 2.6: SSE Connection Status
- [ ] Open DevTools → Network tab
- [ ] User opens chat
- [ ] **Check**: Find request to `/api/chat/subscribe?visitorId=...`
- [ ] **Check**: Response header shows `Content-Type: text/event-stream`
- [ ] **Check**: Response shows `Status: 200 OK`
- [ ] **Check**: Request stays open (no close/abort)

### 3. SSE Fallback Test (Polling)

#### Test 3.1: Block SSE Connection
- [ ] Open DevTools → Network tab
- [ ] User opens chat
- [ ] Right-click `/api/chat/subscribe` → "Block this request"
- [ ] Admin sends message
- [ ] **Check**: User receives message (after 0-3 seconds)
- [ ] **Check**: Console shows `[SSE] Connection error`
- [ ] **Check**: Then polling messages appear: `[REALTIME-HOOK] ..`
- [ ] **Check**: Badge updates within 3 seconds (no real-time)

#### Test 3.2: Network Throttle (Simulate Slow Connection)
- [ ] Open DevTools → Network tab
- [ ] Set throttle to "Slow 3G"
- [ ] User sends message
- [ ] **Check**: Admin receives update (might be delayed)
- [ ] **Check**: Message still arrives (connection is persistent)
- [ ] Remove throttle, verify speed returns to normal

### 4. Database Verification

#### Test 4.1: Message Records
```bash
# Check messages for a visitor
GET /api/debug/badge?visitorId=visitor_12345

# Expected response:
{
  "visitorId": "visitor_12345",
  "userMessages": 3,        // Sent by user
  "adminMessages": 5,       // Sent by admin
  "botMessages": 2,         // Auto-responses
  "unreadCount": 2,         // For admin side
  "messages": [
    {
      "id": "msg_123",
      "sender": "user",
      "isRead": false       // Still unread
    },
    {
      "id": "msg_456",
      "sender": "admin",
      "isRead": true        // Already read
    }
  ]
}
```

#### Test 4.2: Unread Count Calculation
- [ ] User badge = count of messages where sender IN ["admin","bot"] AND isRead=false
- [ ] Admin badge = total sum of unread user messages across all visitors
- [ ] Database matches displayed badge count

### 5. Multi-Tab / Multi-Device Test

#### Test 5.1: Multiple Tabs (Same Browser)
- [ ] Open user chat in Tab 1
- [ ] Open user chat in Tab 2
- [ ] Admin sends message
- [ ] **Check**: Both Tab 1 and Tab 2 show badge +1
- [ ] **Check**: No console errors about duplicate subscriptions
- [ ] Note: Each tab has separate EventSource (2 connections)

#### Test 5.2: Multiple Browsers (Same Visitor)
- [ ] User opens chat in Chrome
- [ ] User opens same chat in Firefox
- [ ] Admin sends message
- [ ] **Check**: Both browsers show badge +1
- [ ] **Check**: Both show same unread count
- [ ] Close one browser, other still updates

#### Test 5.3: Admin Multiple Conversations
- [ ] Admin opens conversation 1 (select user A)
- [ ] User A sends message → badge for A becomes 0
- [ ] User B sends message → badge for B shows 1
- [ ] **Check**: Each conversation has independent unread count
- [ ] **Check**: Opening conversation resets only that one's badge

### 6. Edge Cases

#### Test 6.1: Rapid Message Sending
- [ ] Send 5 messages rapidly (within 1 second)
- [ ] **Check**: All appear in chat
- [ ] **Check**: Badge updates correctly (+5)
- [ ] **Check**: No race conditions or missed updates
- [ ] Open chat: all marked as read at once

#### Test 6.2: Message from Bot Auto-Response
- [ ] User sends message
- [ ] **Check**: System sends bot auto-response
- [ ] **Check**: Bot message appears (not counted in badge)
- [ ] **Check**: Only admin response increments badge

#### Test 6.3: Long Time No Activity
- [ ] User opens chat
- [ ] Close chat
- [ ] Wait 5+ minutes
- [ ] Admin sends message
- [ ] **Check**: User receives notification/badge update
- [ ] **Check**: SSE connection is still alive (heartbeat working)

#### Test 6.4: Browser Sleep/Wake
- [ ] User opens chat
- [ ] Close laptop (sleep mode) for 2 minutes
- [ ] Wake up, check chat
- [ ] Admin sent message while asleep
- [ ] **Check**: User sees message
- [ ] **Check**: Badge shows unread count
- [ ] **Check**: SSE reconnects automatically

#### Test 6.5: Zero Unread Messages
- [ ] All messages are read
- [ ] **Check**: Badge is hidden (not shown if = 0)
- [ ] Admin sends message
- [ ] **Check**: Badge appears with "1"

### 7. Performance Tests

#### Test 7.1: Message Latency
- [ ] Admin sends message
- [ ] Measure time from send to user badge update
- [ ] **Expected**: < 1 second (SSE)
- [ ] **Acceptable**: < 4 seconds (polling fallback)
- [ ] Record in console: `[SSE] New message received` timestamp

#### Test 7.2: Server Load
- [ ] Monitor server resources while testing
- [ ] Check CPU/Memory during:
  - 10 concurrent users
  - Sending messages
  - SSE connections open
- [ ] **Expected**: CPU < 20%, Memory stable

#### Test 7.3: Memory Leak Test
- [ ] Open admin chat, keep open
- [ ] Send/receive 100+ messages
- [ ] Monitor DevTools Memory tab
- [ ] **Check**: Memory usage stable (no leak)
- [ ] Close chat, memory should release

### 8. Browser Compatibility

#### Test on Multiple Browsers
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

**For each browser:**
- [ ] SSE connection works
- [ ] Badge updates in real-time
- [ ] No console errors
- [ ] Message sending works
- [ ] Mark as read works

### 9. Mobile Testing

#### Test on Mobile Browsers
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Tablet (iPad / Android tablet)

**For each:**
- [ ] Chat icon visible and clickable
- [ ] Badge count shows correctly
- [ ] Real-time updates work
- [ ] Sending messages works
- [ ] Opening chat resets badge

### 10. Error Recovery

#### Test 10.1: Server Restart
- [ ] Stop application
- [ ] User chat is open
- [ ] Restart application
- [ ] **Check**: SSE reconnects
- [ ] **Check**: Polling kicks in during restart
- [ ] **Check**: No data loss

#### Test 10.2: Database Connection Loss
- [ ] Stop MongoDB
- [ ] User tries to send message
- [ ] **Check**: Error message appears
- [ ] Restart MongoDB
- [ ] Try again
- [ ] **Check**: Message sends successfully

#### Test 10.3: Network Interruption
- [ ] Disconnect internet (airplane mode)
- [ ] Try to send message
- [ ] **Check**: Appropriate error shown
- [ ] Reconnect internet
- [ ] **Check**: Automatic retry or success on next attempt

## Post-Deployment Tests

### 1. Production Verification

- [ ] Application deployed successfully
- [ ] `/api/chat/subscribe` endpoint accessible
- [ ] New hook imported correctly
- [ ] No TypeScript build errors
- [ ] Application starts without errors

### 2. Production Load Test

- [ ] Monitor server during peak hours
- [ ] Check SSE connection limits
- [ ] Verify badge updates work for all users
- [ ] Monitor error rates

### 3. Monitoring

- [ ] Set up alerts for:
  - `/api/chat/subscribe` errors
  - High SSE connection count
  - High polling request rate
  - Mark-read endpoint failures

## Test Data Cleanup

```bash
# After testing, clear test messages
# Method 1: Reset specific visitor
GET /api/debug/badge?visitorId=test_visitor

# Method 2: Delete via MongoDB
db.messages.deleteMany({ visitorId: "test_visitor" })
db.chats.deleteOne({ visitorId: "test_visitor" })
```

## Sign-Off

- [ ] All tests passed
- [ ] No critical issues found
- [ ] Performance acceptable
- [ ] Ready for production

**Tested by**: _______________  
**Date**: _______________  
**Notes**: _______________
