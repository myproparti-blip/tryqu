# Testing Guide - Chat Isolation & Multi-User Functionality

## Quick Test Steps

### **Test 1: User Isolation (Same Browser)**

**Setup:**
1. Open browser Developer Tools (F12)
2. Clear localStorage
3. Go to website

**Step 1: User 1 Creates Chat**
```
1. Click Chat button
2. Message: "Hello from user 1"
3. Send
4. Check localStorage → visitorId = visitor_xxx1
5. Note: Should see "Thank you" auto-reply
```

**Step 2: Simulate User 2 (Clear Data)**
```
1. In DevTools Console, run:
   localStorage.clear()
   location.reload()
2. New visitorId generated automatically
3. Message: "Hi from user 2"
4. Send
5. Check console: [USER-CHAT] Loading chat for visitor: visitor_xxx2
```

**Step 3: Verify Isolation**
```
✅ User 2 should see:
   - "Hi from user 2"
   - "Thank you" auto-reply
   
❌ User 2 should NOT see:
   - "Hello from user 1" (User 1's message)
   - User 1's auto-reply
```

**Success Indicators:**
```
Console logs:
[CHAT-HISTORY] Fetched 2 messages for visitor: visitor_xxx2
✅ Count = 2 (not 4+)
```

---

### **Test 2: Real-Time Updates Without Cross-Talk**

**Setup:** Two separate browser windows

**Window 1: User 1**
```
1. Open website in Window 1
2. Send message: "Test message 1"
3. See auto-reply
4. Keep window open
5. Don't send more messages
```

**Window 2: User 2**
```
1. Open website in NEW browser window
2. Clear localStorage first
3. Send message: "Test message 2"
4. See auto-reply
5. Wait and watch for new messages
```

**Expected Result:**
```
User 1 (Window 1) should see:
- "Test message 1"
- Auto-reply
- ❌ Should NOT see "Test message 2"

User 2 (Window 2) should see:
- "Test message 2"
- Auto-reply
- ❌ Should NOT see "Test message 1"
```

**Verify in Console:**
```
Window 1: [USER-CHAT] Loading chat for visitor: visitor_xxx1
Window 2: [USER-CHAT] Loading chat for visitor: visitor_xxx2
```

---

### **Test 3: Admin Views Multiple Users**

**Setup:** One browser window logged in as admin

**Step 1: Open Admin Chat**
```
1. Click Chat button
2. Click "Admin" button
3. Login with credentials:
   - Email: admin@tryqu.tech
   - Password: Admin@12345
```

**Step 2: View Conversations List**
```
Expected to see in sidebar:
- Conversation 1 (visitor_xxx1)
  - lastMessage: "Hello from user 1"
  - unread: (count)
  - assignedTo: Admin or Unassigned
  
- Conversation 2 (visitor_xxx2)
  - lastMessage: "Hi from user 2"
  - unread: (count)
  - assignedTo: (other admin or Unassigned)
```

**Check Console:**
```
[ADMIN-CHAT] Loading conversation for: visitor_xxx1
[ADMIN-CHAT] Loading conversation for: visitor_xxx2
```

---

### **Test 4: Admin Replies Correctly**

**Setup:** Admin logged in, viewing User 1's chat

**Step 1: Admin Selects User 1**
```
1. Admin clicks on first conversation
2. Console should show:
   [ADMIN-CHAT] Loading conversation for: visitor_xxx1
3. See User 1's messages only
```

**Step 2: Admin Replies**
```
1. Type in input: "How can I help you?"
2. Send
3. Message appears in conversation
4. Check console:
   [CHAT] Admin message from admin_xxx: How can I help you?
5. Check Database:
   - sender = "admin" (not "user")
   - adminId = "admin_xxx" (recorded)
```

**Step 3: Verify No Auto-Reply**
```
✅ Correct: Admin's message shows, no auto-reply
❌ Wrong: Would see auto-reply like user does
```

**Step 4: Switch to User 2**
```
1. Admin clicks on second conversation
2. Console: [ADMIN-CHAT] Loading conversation for: visitor_xxx2
3. See User 2's messages only
4. User 1's messages are NOT visible
5. Previous conversation completely hidden
```

---

### **Test 5: User Doesn't See Other Users' Replies**

**Setup:** Two users + one admin

**User 1 Window:**
```
1. Send: "What's the price?"
2. Wait for admin reply
3. Should see admin's response
```

**User 2 Window:**
```
1. Send different question
2. Watch for admin's reply to User 1
3. ❌ Should NOT see User 1's conversation
4. ❌ Should NOT see admin's reply to User 1
```

**Verify:**
```
User 2 console should show:
[CHAT-HISTORY] Fetched 2 messages for visitor: visitor_xxx2
(Only their own message + auto-reply, not User 1's data)
```

---

## Console Testing Commands

### **Check Current Visitor ID**
```javascript
localStorage.getItem('visitorId')
// Output: visitor_1674523847291_x7a9k2m1
```

### **Check Admin Token**
```javascript
localStorage.getItem('adminToken')
// Output: eyJhZG1pbklkIjoiYWRtaW5fYWRtaW5fdHJ5cXVfdGVjaCIs...
```

### **Manually Fetch User's Messages**
```javascript
const visitorId = localStorage.getItem('visitorId')
fetch(`/api/chat/history?visitorId=${visitorId}`)
  .then(r => r.json())
  .then(d => {
    console.log('Message count:', d.messages.length)
    console.log('VisitorId match:', d.visitorId === visitorId)
    console.log('Messages:', d.messages)
  })
```

### **Manually Fetch Admin's Conversations**
```javascript
const adminToken = localStorage.getItem('adminToken')
fetch('/api/admin/chats')
  .then(r => r.json())
  .then(d => {
    console.log('Total conversations:', d.visitors.length)
    console.log('Conversations:', d.visitors)
  })
```

### **Test Message Isolation**
```javascript
// Simulate fetching wrong visitorId
fetch(`/api/chat/history?visitorId=visitor_wrong_id`)
  .then(r => r.json())
  .then(d => {
    console.log('Result:', d) // Should be empty
  })
```

---

## Expected Console Output

### **User Scenario**
```
[USER-CHAT] Loading chat for visitor: visitor_1674523847291_x7a9k2m1
[CHAT-HISTORY] Fetched 2 messages for visitor: visitor_1674523847291_x7a9k2m1
(2 seconds later, polling again)
[USER-CHAT] Loading chat for visitor: visitor_1674523847291_x7a9k2m1
[CHAT-HISTORY] Fetched 2 messages for visitor: visitor_1674523847291_x7a9k2m1
```

### **Admin Scenario**
```
[ADMIN-CHAT] Loading conversation for: visitor_1674523847291_x7a9k2m1
[CHAT-HISTORY] Fetched 3 messages for visitor: visitor_1674523847291_x7a9k2m1
(clicking different user)
[ADMIN-CHAT] Loading conversation for: visitor_1674523852105_y5b2c3m9
[CHAT-HISTORY] Fetched 2 messages for visitor: visitor_1674523852105_y5b2c3m9
```

### **Error Scenario (Security Check)**
```
[USER-CHAT] Loading chat for visitor: visitor_xxx1
[ERROR] Chat mismatch! Expected visitor_xxx1, got visitor_xxx2
(This should NEVER happen in normal operation)
```

---

## Performance Testing

### **Test with Multiple Users**

**Scenario:** 5 simultaneous users, each polling every 2 seconds

**Metrics to Check:**
```
1. Response time: GET /api/chat/history
   Expected: < 200ms (with proper indexing)
   
2. Database query:
   Message.find({visitorId}) uses index
   Should be fast even with 1M+ messages
   
3. Memory: Each user's frontend should use ~1-2MB
```

**Check Database Indexes:**
```javascript
// In MongoDB
db.messages.getIndexes()
// Should show index on visitorId
```

---

## Security Testing

### **Test 1: Can User Access Other User's Messages?**

```javascript
// User 1 gets their visitorId
const visitorId1 = localStorage.getItem('visitorId')
// User 1 tries to fetch User 2's messages
fetch(`/api/chat/history?visitorId=visitor_different_id`)
  .then(r => r.json())
  .then(d => {
    console.log(d) // Should be empty messages: []
  })
```

**Expected:** Empty messages array (✅ Secure)
**Wrong:** Shows other user's messages (❌ Security breach)

### **Test 2: Can Admin Impersonate User?**

Admin should need token to access `/api/admin/chats`
```javascript
// Without token
fetch('/api/admin/chats')
  .then(r => r.json())
  .then(d => console.log(d))
  
// Should still work if endpoints don't require auth
// (TODO: Add admin auth verification to admin endpoints)
```

---

## Database Verification

### **Check Message Structure**
```javascript
// In MongoDB shell
db.messages.findOne({})
// Should show:
{
  _id: ObjectId(...),
  id: "msg_xxx",
  content: "Message",
  sender: "user",
  visitorId: "visitor_xxx",  // ← Should exist and match
  timestamp: ISODate(...),
  adminId: null or "admin_xxx"
}
```

### **Check Chat Structure**
```javascript
db.chats.findOne({})
// Should show:
{
  _id: ObjectId(...),
  visitorId: "visitor_xxx",  // ← UNIQUE KEY
  messages: [ObjectId(...), ObjectId(...), ...],
  lastMessage: "...",
  unreadCount: 0,
  assignedTo: "admin_xxx" or null,
  readAt: ISODate(...) or null
}
```

### **Verify Unique VisitorId**
```javascript
db.chats.find().toArray().map(c => c.visitorId)
// All should be unique
// No duplicates
```

---

## Success Criteria Checklist

- [ ] User can open chat and see only their messages
- [ ] Multiple users don't see each other's messages
- [ ] Real-time polling works (2-second updates)
- [ ] Admin can see list of all conversations
- [ ] Admin can click on one conversation at a time
- [ ] Admin replies don't get auto-reply (isAdmin=true)
- [ ] User replies get auto-reply (isAdmin=false)
- [ ] Each conversation is isolated (no cross-talk)
- [ ] Console shows correct visitorId logs
- [ ] No error logs about chat mismatch
- [ ] Message count is correct (not doubled/tripled)
- [ ] Timestamps are in correct order
- [ ] Admin assignment is tracked (assignedTo field)
- [ ] Unread count decreases when admin opens chat
