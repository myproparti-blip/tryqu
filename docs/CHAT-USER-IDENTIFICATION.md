# Chat System: User Identification & Multi-User Architecture

## Overview
The chat system uses a **unique visitor ID** to identify and track individual users across sessions, enabling multiple users to chat simultaneously with proper admin assignment.

---

## User Identification

### 1. **Visitor ID Generation (Frontend - User Side)**

**Location:** `components/chatbot-modal-v2.tsx` (lines 42-49)

```typescript
// First visit or new browser
const id = localStorage.getItem("visitorId") || 
  `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

localStorage.setItem("visitorId", id)
setVisitorId(id)
```

**How it works:**
- Each browser/device gets a unique `visitorId`
- Format: `visitor_1234567890_abc123def456`
- Stored in browser's localStorage (persists across sessions)
- If user clears localStorage → new visitorId generated
- Same user = same visitorId across all chats

**Example IDs:**
```
visitor_1674523847291_x7a9k2m1
visitor_1674523900105_p2q8r5s3
visitor_1674523950222_t1v4w2x8
```

---

## Database Structure: How Users Are Stored

### **Message Collection**
Stores individual messages with full context:

```javascript
{
  _id: ObjectId("64a2b1c3..."),
  id: "msg_1674523900105_abc123",
  content: "Hello, I need help",
  sender: "user",           // who sent it: "user" | "admin" | "bot"
  visitorId: "visitor_1674523847291_x7a9k2m1",  // LINKS TO USER
  adminId: undefined,       // empty for user messages
  timestamp: 2024-01-23T10:30:00.000Z
}
```

### **Chat Collection (Conversation Thread)**
Groups all messages from one user into one conversation:

```javascript
{
  _id: ObjectId("64a2b1d4..."),
  visitorId: "visitor_1674523847291_x7a9k2m1",  // UNIQUE - one per user
  visitorName: "Anonymous",
  visitorEmail: "not-provided",
  messages: [
    ObjectId("64a2b1c3..."),  // ref to Message doc
    ObjectId("64a2b1c4..."),
    ObjectId("64a2b1c5...")
  ],
  lastMessage: "Thank you for your message...",
  lastMessageTime: 2024-01-23T10:30:02.000Z,
  lastMessageSender: "bot",
  unreadCount: 2,            // unread by admin
  status: "active",
  assignedTo: "admin_admin_tryqu_tech",  // which admin is handling
  readAt: 2024-01-23T10:30:05.000Z,     // when admin opened it
  createdAt: 2024-01-23T10:25:00.000Z,
  updatedAt: 2024-01-23T10:30:05.000Z
}
```

---

## Multi-User Chat Flow

### **Scenario: 3 Users Chatting Simultaneously**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ USER 1          │    │ USER 2          │    │ USER 3          │
│ visitor_xxx1    │    │ visitor_xxx2    │    │ visitor_xxx3    │
└────────┬────────┘    └────────┬────────┘    └────────┬────────┘
         │                      │                      │
         ├──────────────────────┼──────────────────────┤
         │      All send messages               │
         │                                               │
    ┌────▼────────────────────────────────────────────▼───┐
    │              Database (MongoDB)                     │
    │                                                      │
    │  Chat Collection:                                   │
    │  ┌──────────────────────────────────────────────┐   │
    │  │ Chat_1: visitorId=visitor_xxx1              │   │
    │  │ - messages: [msg1, msg2, msg3]              │   │
    │  │ - assignedTo: admin_admin_tryqu_tech        │   │
    │  ├──────────────────────────────────────────────┤   │
    │  │ Chat_2: visitorId=visitor_xxx2              │   │
    │  │ - messages: [msg4, msg5]                    │   │
    │  │ - assignedTo: Unassigned                    │   │
    │  ├──────────────────────────────────────────────┤   │
    │  │ Chat_3: visitorId=visitor_xxx3              │   │
    │  │ - messages: [msg6, msg7, msg8, msg9]        │   │
    │  │ - assignedTo: admin_another_admin_email     │   │
    │  └──────────────────────────────────────────────┘   │
    └────┬────────────────────────────────────────────────┘
         │
         ├──────────────────────┬──────────────────────┤
         │                      │                      │
    ┌────▼────────┐      ┌─────▼──────┐      ┌─────────▼────┐
    │  ADMIN 1    │      │  ADMIN 2   │      │   ADMIN 3    │
    │  Can view   │      │  Can view  │      │  Can view    │
    │  User 1     │      │  User 2    │      │  User 3      │
    │  & other    │      │  & other   │      │  & other     │
    │  unassigned │      │ unassigned │      │  unassigned  │
    └─────────────┘      └────────────┘      └──────────────┘
```

---

## API Endpoints for User Tracking

### **1. Send Message (Identifies Sender)**
```
POST /api/chat/send
{
  "content": "Hello",
  "visitorId": "visitor_xxx1",      // ← USER IDENTIFIER
  "isAdmin": false
}

Response:
{
  "success": true,
  "messageId": "msg_xxx",
  "botResponse": "Thank you..."
}
```

### **2. Get Chat History (All Messages for One User)**
```
GET /api/chat/history?visitorId=visitor_xxx1

Response:
{
  "visitorId": "visitor_xxx1",
  "messages": [
    {
      "id": "user_xxx",
      "content": "Hello",
      "sender": "user",
      "visitorId": "visitor_xxx1"
    },
    {
      "id": "bot_xxx",
      "content": "Thank you...",
      "sender": "bot",
      "visitorId": "visitor_xxx1"
    }
  ]
}
```

### **3. Get All Conversations (Admin Dashboard)**
```
GET /api/admin/chats

Response:
{
  "visitors": [
    {
      "visitorId": "visitor_xxx1",
      "visitorName": "Anonymous",
      "visitorEmail": "not-provided",
      "lastMessage": "Hello there...",
      "lastMessageTime": "1/23/2024 10:30 AM",
      "unread": 2,
      "assignedTo": "admin_admin_tryqu_tech",  ← WHICH ADMIN
      "readAt": "1/23/2024 10:30:05 AM",        ← WHEN OPENED
      "messageCount": 5,
      "status": "active"
    }
    // ... more users
  ]
}
```

### **4. Get Specific User Info (Admin)**
```
GET /api/admin/chat-info?visitorId=visitor_xxx1

Response:
{
  "visitorId": "visitor_xxx1",
  "visitorName": "Anonymous",
  "visitorEmail": "not-provided",
  "exists": true,
  "status": "active",
  "createdAt": "1/23/2024 10:25 AM",
  "lastMessageTime": "1/23/2024 10:30 AM",
  "readAt": "1/23/2024 10:30:05 AM",
  "assignedTo": "admin_admin_tryqu_tech",
  "unreadCount": 0,
  "messageStats": {
    "total": 5,
    "userMessages": 3,
    "adminMessages": 0,
    "botMessages": 2
  }
}
```

### **5. Mark Conversation as Read (Admin Assignment)**
```
POST /api/chat/mark-read
{
  "visitorId": "visitor_xxx1",
  "adminId": "admin_admin_tryqu_tech",
  "adminToken": "eyJ..."
}

Response:
{
  "success": true,
  "chat": {
    "visitorId": "visitor_xxx1",
    "assignedTo": "admin_admin_tryqu_tech",
    "readAt": "2024-01-23T10:30:05.000Z"
  }
}
```

---

## Admin Authentication

### **Admin Login Flow**

**Location:** `app/api/auth/admin-login/route.ts`

```
POST /api/auth/admin-login
{
  "email": "admin@tryqu.tech",
  "password": "Admin@12345"
}

Response:
{
  "success": true,
  "token": "eyJhZG1pbklkIjoiYWRtaW5fYWRtaW5fdHJ5cXVfdGVjaCIsImlhdCI6...",
  "adminId": "admin_admin_tryqu_tech",  ← CONSISTENT ID (not new each login)
  "email": "admin@tryqu.tech"
}
```

**AdminId Generation:**
```typescript
const adminId = "admin_" + email.replace(/[^a-zA-Z0-9]/g, "_")
// admin@tryqu.tech → admin_admin_tryqu_tech
// support@company.com → admin_support_company_com
```

**Token Structure (Base64 encoded JSON):**
```json
{
  "adminId": "admin_admin_tryqu_tech",
  "iat": 1674523900105,
  "exp": 1674610300105  // 24 hours from now
}
```

---

## Security & Isolation

### **User Privacy:**
- ✅ Users can only see their own messages (identified by visitorId)
- ✅ Users cannot access other users' conversations
- ✅ Auto-reply messages sent only to users, not admins

### **Admin Access Control:**
- ✅ Admins can only access after login (token required)
- ✅ Token expires after 24 hours (requires re-login)
- ✅ AdminId verified on every request
- ✅ Conversation assignment tracked (assignedTo field)

### **Data Integrity:**
- ✅ visitorId is unique in Chat collection (prevents duplicates)
- ✅ Messages indexed by visitorId for fast queries
- ✅ unreadCount tracks admin engagement
- ✅ readAt timestamp shows when conversation was opened

---

## Summary: How Database Knows Who Is Chatting

| Component | Identifies | How |
|-----------|-----------|-----|
| **Visitor/User** | By visitorId | Random unique ID in localStorage |
| **Chat Thread** | Grouped by visitorId | One Chat doc per user |
| **Messages** | Linked to user | visitorId field in Message doc |
| **Admin** | By adminId | Generated from email on login |
| **Admin Token** | Validates admin | Base64 JWT with adminId + expiry |
| **Conversation Assignment** | assignedTo field | Which admin is handling this user |

---

## Common Scenarios

### **Scenario 1: New User Starts Chat**
1. Browser generates random `visitorId` → localStorage
2. User sends message → POST /api/chat/send with visitorId
3. Database: Creates Chat doc with unique visitorId
4. Creates Message doc with sender="user", visitorId=xxx
5. Bot sends auto-reply
6. User sees conversation in their chat

### **Scenario 2: Admin Logs In**
1. Admin enters credentials
2. Server generates consistent adminId from email
3. Creates 24-hour token with adminId
4. Admin sees all conversations (Chat.find())
5. Clicks on User 1 → loads history by visitorId
6. Messages fetched where visitorId=xxx

### **Scenario 3: Admin Replies to User**
1. Admin selects User 1's conversation
2. Admin types message → POST /api/chat/send
3. Payload: {content, visitorId=xxx, adminId=yyy, isAdmin=true, token=zzz}
4. Server verifies token, checks adminId matches
5. Creates Message with sender="admin", adminId=yyy, visitorId=xxx
6. Updates Chat: assignedTo=yyy, readAt=now
7. User's frontend polls → sees admin message
8. No auto-reply sent (isAdmin=true skips bot response)

---

## Files Involved

- **Frontend Components:**
  - `components/chatbot-modal-v2.tsx` - Main chat UI
  - `components/chatbot-modal.tsx` - Alternative version

- **Backend APIs:**
  - `app/api/chat/send/route.ts` - Send/receive messages
  - `app/api/chat/history/route.ts` - Get user's messages
  - `app/api/chat/mark-read/route.ts` - Mark as read by admin
  - `app/api/admin/chats/route.ts` - List all conversations
  - `app/api/admin/chat-info/route.ts` - Get user info
  - `app/api/auth/admin-login/route.ts` - Admin authentication

- **Database Models:**
  - `lib/models/Message.ts` - Individual message doc
  - `lib/models/Chat.ts` - Conversation thread doc
