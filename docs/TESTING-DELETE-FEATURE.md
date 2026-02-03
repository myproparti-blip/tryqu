# Delete Chat Feature - Testing Guide

## Pre-Testing Checklist
- [ ] Run `npm install` to ensure dependencies are fresh
- [ ] Start the development server: `npm run dev`
- [ ] Open application in browser
- [ ] Test in Chrome, Firefox, Safari if possible
- [ ] Have browser DevTools open (F12) for console logs

## Test Scenarios

### 1. Admin Dashboard Delete

**Setup:**
1. Navigate to `/admin/chats`
2. Login with admin credentials
3. Ensure at least one active conversation exists

**Test Steps:**
```
1. Click on a conversation in the left panel
2. Verify "Delete" button appears in header (red with trash icon)
3. Click the "Delete" button
4. Confirm modal appears with warning message
5. Click "Cancel" → Modal closes, no changes
6. Click delete button again
7. Click "Delete Chat" button in modal
8. Verify loading spinner appears
9. Wait for API response
10. Verify chat is removed from left panel
11. Verify chat view clears
```

**Expected Results:**
- ✅ Delete button visible only when chat selected
- ✅ Button is red with clear trash icon
- ✅ Confirmation modal appears on click
- ✅ Cancel button closes modal without changes
- ✅ Delete button triggers API call
- ✅ Loading spinner shows during deletion
- ✅ Chat removed from list after deletion
- ✅ View clears automatically

---

### 2. Chat Modal Admin Delete (from header)

**Setup:**
1. Click floating chat icon
2. Admin logs in via modal
3. Select a conversation from left panel

**Test Steps:**
```
1. Verify "Delete" button visible in header
2. Click delete button
3. Confirmation modal appears
4. Click "Delete Chat"
5. Verify conversation removed from list
6. Verify chat area clears
```

**Expected Results:**
- ✅ Delete button visible in header
- ✅ Modal shows appropriate warning
- ✅ Conversation removed from list

---

### 3. Chat Modal Admin Delete (from list)

**Setup:**
1. Click floating chat icon
2. Admin logs in
3. View admin conversation list

**Test Steps:**
```
1. Hover over conversation item
2. See delete button at bottom of item
3. Click delete button
4. Confirmation modal appears
5. Click "Delete Chat"
6. Verify conversation removed from list
7. List updates immediately
```

**Expected Results:**
- ✅ Delete button visible on each conversation
- ✅ Button is styled consistently
- ✅ Delete works without opening chat
- ✅ List updates immediately

---

### 4. User Chat Delete

**Setup:**
1. Click floating chat icon (non-admin)
2. Send a test message
3. Receive a response (or bot message)

**Test Steps:**
```
1. Verify "Delete" button visible in header
2. Type and send a message if not already done
3. Verify delete button is visible
4. Click delete button
5. Confirmation modal appears (user-specific message)
6. Verify message says "delete your chat"
7. Click "Delete Chat"
8. Verify chat clears
9. Verify messages disappear
10. Verify delete button disappears (no messages)
```

**Expected Results:**
- ✅ Delete button only shows if user has messages
- ✅ Modal message tailored to user ("your chat")
- ✅ All messages cleared
- ✅ Button disappears after deletion
- ✅ Chat history gone

---

### 5. Confirmation Modal Testing

**Test Steps:**
```
1. Initiate delete from any interface
2. Verify modal title: "Delete Chat"
3. Verify trash icon in header
4. Verify warning message visible
5. Verify red warning box with ⚠️ icon
6. Verify two buttons: "Cancel" and "Delete Chat"
7. Test clicking outside modal (should not close)
8. Test "Cancel" button → closes without deleting
9. Test "Delete Chat" button → initiates deletion
```

**Expected Results:**
- ✅ Modal is centered on screen
- ✅ Dark background with blur
- ✅ All text readable
- ✅ Warning is clear and prominent
- ✅ Buttons are clearly labeled
- ✅ Cancel works correctly

---

### 6. Loading State Testing

**Test Steps:**
```
1. Initiate delete
2. Click "Delete Chat"
3. Observe loading spinner in button
4. Observe "Deleting..." text
5. Verify buttons are disabled
6. Wait for completion
7. Verify spinner disappears
8. Verify UI updates
```

**Expected Results:**
- ✅ Spinner appears during deletion
- ✅ Text changes to "Deleting..."
- ✅ All buttons disabled (no double-click)
- ✅ Spinner disappears on completion
- ✅ UI updates immediately

---

### 7. Mobile Responsiveness Testing

**Setup:**
- Open DevTools (F12)
- Set to mobile view (375px width)
- Or test on actual mobile device

**Test Steps:**
```
1. Admin Dashboard:
   - Select chat
   - Verify delete button visible (icon-only)
   - Click delete
   - Verify modal works on mobile
   - Test on various screen sizes

2. Chat Modal:
   - Open on mobile
   - Verify delete button visible
   - Test delete functionality
   - Verify modal is responsive

3. Conversation List:
   - Scroll through list
   - Verify delete buttons accessible
   - Test delete on mobile
```

**Expected Results:**
- ✅ Delete button text hidden on small screens
- ✅ Icon remains visible
- ✅ Modal adapts to screen size
- ✅ All functionality works on mobile
- ✅ Touch interactions work properly

---

### 8. Database Verification

**Test Steps:**
```
1. Note a visitorId before deletion
2. Delete the chat via UI
3. Check MongoDB:
   - Verify Chat document deleted
   - Verify all Message documents deleted
   - No orphaned records remain
4. Create new chat with same visitorId
5. Verify it starts fresh (no old messages)
```

**Expected Results:**
- ✅ Chat document removed
- ✅ All messages removed
- ✅ No orphaned records
- ✅ Fresh chat can be created

---

### 9. Error Handling Testing

**Test Steps:**
```
1. Try deleting non-existent chat (manipulate API)
2. Try invalid visitorId
3. Simulate network error
4. Refresh page during deletion
```

**Expected Results:**
- ✅ Error message displayed
- ✅ Chat not deleted on error
- ✅ UI remains stable
- ✅ Can retry operation

---

### 10. Browser Compatibility Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Test Steps:**
For each browser:
```
1. Open chat interface
2. Click delete
3. Verify all UI elements visible
4. Verify button clicks work
5. Verify modal displays correctly
6. Verify deletion completes
```

**Expected Results:**
- ✅ Works in all major browsers
- ✅ Styling is consistent
- ✅ No console errors
- ✅ All animations smooth

---

## Test Data Requirements

For comprehensive testing, you need:
- At least 3 conversations (admin use)
- Multiple messages in at least one chat (user test)
- Access to admin credentials
- Database access for verification

---

## Known Issues & Limitations

None identified in current implementation.

---

## Performance Checklist

- [ ] Delete completes within 2 seconds
- [ ] No page lag or freezing
- [ ] Animations are smooth (60fps)
- [ ] Modal appears instantly
- [ ] No console errors
- [ ] Memory usage stable
- [ ] API response time reasonable

---

## Sign-off

- [ ] All test scenarios completed
- [ ] All expected results verified
- [ ] No critical bugs found
- [ ] Mobile responsiveness confirmed
- [ ] Database consistency verified
- [ ] Error handling tested
- [ ] Ready for production

**Tested by**: ________________
**Date**: ________________
**Devices**: ________________

---

## Reporting Issues

If you find any issues:
1. Note exact steps to reproduce
2. Take screenshot/video
3. Check browser console for errors
4. Report with device/browser info
5. Include expected vs actual behavior

---

For questions or issues, refer to:
- `docs/IMPLEMENTATION-COMPLETE.md` - Technical details
- `DELETE-CHAT-QUICK-REFERENCE.md` - Quick guide
- `docs/DELETE-CHAT-FEATURE.md` - Full documentation
