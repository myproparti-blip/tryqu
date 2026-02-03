# Delete Chat Feature - Visual Guide

## Admin Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  CONVERSATIONS                          CHAT AREA               │
│  ─────────────────                      ──────────              │
│                                                                 │
│  [Chat 1]  ←                      Visitor: user-123             │
│  [Chat 2]  ←  Select a chat   ┌────────────────────────────────┤
│  [Chat 3]     to see delete   │ ┌─────────────────────────────┐ │
│                 button         │ │ Conversation History:      │ │
│  ...                          │ │                            │ │
│  [Chat N]                     │ │ Bot: Thank you...         │ │
│                                │ │ User: Hi there            │ │
│                                │ │ Admin: Hello!             │ │
│                                │ │                            │ │
│                                │ │                            │ │
│                                │ └─────────────────────────────┘ │
│                                │ ┌──────────────────────────────┐│
│                                │ │ Type response...             ││
│                                │ │                        Send ││
│                                │ └──────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

HEADER (when chat selected):
┌──────────────────────────────────────────────────────────────────┐
│ Visitor: abc123xyz        [Delete]  Logout  [X]                  │
└──────────────────────────────────────────────────────────────────┘
                            ↑
                      DELETE BUTTON
                      (RED with icon)
                      Only visible when
                      chat is selected
```

---

## Chat Modal - Admin View

```
┌────────────────────────────────────────────────────────────────┐
│  ✓ Admin Dashboard        Logout    [Delete]  [X]              │ ← DELETE in header
├──────────────────────────────────────────────────────────────┬─┤
│ CONVERSATIONS (4)                                            │ │
│ ────────────────────                                        │ │
│ ┌──────────────────────────────────────────────────────┐  │ │
│ │ User 1                                          [2]  │  │ │
│ │ Last message preview...                             │  │ │
│ │ 2:30 PM                                             │  │ │
│ │                         ┌──────────────────────────┐│  │ │
│ │                         │[Trash] Delete            ││  │ │ ← DELETE in list
│ │                         └──────────────────────────┘│  │ │
│ └──────────────────────────────────────────────────────┘  │ │
│                                                            │ │
│ ┌──────────────────────────────────────────────────────┐  │ │
│ │ User 2                                               │  │ │
│ │ Previous conversation...                             │  │ │
│ │ 1:15 PM                                              │  │ │
│ │                         ┌──────────────────────────┐│  │ │
│ │                         │[Trash] Delete            ││  │ │
│ │                         └──────────────────────────┘│  │ │
│ └──────────────────────────────────────────────────────┘  │ │
│                                                            │ │
│ [More conversations...]                                    │ │
└────────────────────────────────────────────────────────────┴─┘

DELETE BUTTON LOCATIONS:
1. Header (top-right) - when viewing conversation
2. List items - at bottom of each conversation card
```

---

## Confirmation Modal

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Trash] Delete Chat                            │
│                                                 │
│  Are you sure you want to delete this           │
│  entire chat conversation?                      │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ ⚠️ Warning: All messages and chat         │ │
│  │ history will be permanently removed.      │ │
│  │ This action cannot be undone.             │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Cancel]  [Trash] Delete Chat                 │
│                                                 │
└─────────────────────────────────────────────────┘

STYLING:
- Border: Red (2px)
- Background: Dark gray
- Warning box: Red tinted
- Button colors: Cancel = gray, Delete = red
- Icon: Trash icon in header
- Animation: Smooth fade-in
```

---

## User Chat Modal

```
┌────────────────────────────────────────────────────┐
│  👤 Chat Support                 [Delete] [Admin] [X]│
│  We're here to help              ↑
├───────────────────────────────────────────────────┤
│                                                   │
│                          Hi there!                │
│                          12:03 PM                 │
│                          ┌─────────────────────┐ │
│                          │ [Trash]             │ │
│                          │ User message here   │ │
│                          │ 12:03 PM            │ │
│                          └─────────────────────┘ │
│                                                   │
│  ┌──────────────────────────────────────────┐   │
│  │ Thank you for your message. Our team     │   │
│  │ will get back to you shortly.            │   │
│  │ 12:03 PM                                 │   │
│  └──────────────────────────────────────────┘   │
│                                                   │
│  [Services] [About] [FAQ] [Pricing] [Contact]   │
│                                                   │
│  ┌─────────────────────────┬─────────────────┐  │
│  │ Ask us anything...       │ [Send]          │  │
│  └─────────────────────────┴─────────────────┘  │
│                                                   │
└────────────────────────────────────────────────────┘

DELETE BUTTON:
- Location: Header (top-right)
- Shows: Only when user has messages
- Text: "Delete" (full) or icon-only on mobile
- Color: Red
```

---

## Mobile Views

### Admin Dashboard (Mobile)
```
┌──────────────────────────┐
│ Conversations    👤 🚪    │ ← Menu
├──────────────────────────┤
│ Chat 1                   │
│ Last message...         │
│ ─────────────────────────│
│ Chat 2                   │
│ Last message...         │
│ ─────────────────────────│
│ [Chat 3 selected]        │
│ ═════════════════════════│
│ Visitor: user-123        │
│ [🗑] [✓] [🚪] [X]       │ ← Delete icon in header
├──────────────────────────┤
│ Conversation history...  │
│                          │
│                          │
├──────────────────────────┤
│ [Type message...]  Send  │
└──────────────────────────┘

DELETE BUTTON:
- Shows as icon-only on mobile
- Red color preserved
- Easy to tap (32px min)
```

---

## Color Scheme

### Delete Button
```
Default State:
  Background: rgba(220, 38, 38, 0.2)  [Red with transparency]
  Text: rgb(248, 113, 113)             [Red]
  Border: rgb(239, 68, 68) with 0.3 opacity

Hover State:
  Background: rgba(220, 38, 38, 0.4)  [Darker red]
  Text: rgb(254, 226, 226)             [Light red]
  Border: rgb(220, 38, 38) with 0.6 opacity

Active/Click State:
  Background: rgba(220, 38, 38, 0.5)
  Shadow: Red glow effect

Disabled State (during deletion):
  Opacity: 0.5
  Cursor: not-allowed
```

### Modal
```
Border: rgb(239, 68, 68) solid 2px [Red]
Background: rgb(17, 24, 39) [Dark gray]
Title: rgb(255, 255, 255) [White]
Text: rgb(209, 213, 219) [Light gray]
Warning: rgba(127, 29, 29, 0.2) [Red tint]

Buttons:
  Cancel: Gray background, gray border
  Delete: Red background, hover to darker red
```

---

## Responsive Breakpoints

```
Desktop (≥1024px):
  ✓ Full "Delete" text visible
  ✓ Full layout displayed
  ✓ No truncation

Tablet (768px - 1023px):
  ✓ "Delete" text still visible
  ✓ Layout adapts slightly
  ✓ Touch-friendly sizing

Mobile (<768px):
  ✓ Delete text hidden, icon shows
  ✓ Modal stacks vertically
  ✓ Larger touch targets
  ✓ Full width on small screens
```

---

## State Indicators

### Button States

**Idle State:**
```
[🗑 Delete]
Red button, clickable
```

**Hover State:**
```
[🗑 Delete] ← Darker red, raised shadow
```

**Active/Loading State:**
```
[⟳ Deleting...] ← Spinner animation, disabled
```

---

## Icon Details

### Trash Icon
```
Source: lucide-react
Icon Name: Trash2
Sizes Used:
  - Header button: h-5 w-5 (20px)
  - Confirmation modal: h-6 w-6 (24px)
  - List item button: h-3.5 w-3.5 (14px)
Color: Red (matches text)
```

---

## Animation Details

### Modal Entrance
```
Effect: Fade-in + Scale
Duration: 200ms
Easing: ease-out
Start: opacity-0, scale-95
End: opacity-100, scale-100
```

### Loading Spinner
```
Effect: Rotating spinner
Duration: 1s per rotation
Color: White
Size: 16px x 16px
Animation: Linear infinite
```

### Button Hover
```
Effect: Background color change + border highlight
Duration: 200ms
Easing: ease-in-out
```

---

## Accessibility Features

```
✓ Proper contrast ratios (WCAG AA)
✓ Keyboard navigation support
✓ Aria-labels on buttons
✓ Clear focus states
✓ Sufficient touch target size (min 32x32px)
✓ Icon + text (not icon-only on large screens)
✓ Error messages descriptive
✓ Confirmation prevents accidental action
```

---

## Examples

### Before Delete
```
Admin sees conversation in list with delete option available
User can see their chat with option to clear history
```

### After Delete
```
Conversation removed from list
Chat area cleared
No trace of deleted conversation
```

---

## Quick Reference

| Location | Button Style | Visibility | Action |
|----------|--------------|-----------|--------|
| Admin Dashboard Header | Red with text | When chat selected | Delete conversation |
| Admin Modal Header | Red with text | When conversation selected | Delete conversation |
| Admin Modal List Item | Red icon | Always on each item | Delete without opening |
| User Modal Header | Red with text | When messages exist | Delete own chat |

---

This visual guide complements the code documentation. For implementation details, see:
- `IMPLEMENTATION-COMPLETE.md` - Technical implementation
- `DELETE-CHAT-FEATURE.md` - Full documentation
- `DELETE-CHAT-QUICK-REFERENCE.md` - Quick guide
