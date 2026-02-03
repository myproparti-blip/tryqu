import mongoose, { Schema, Document } from "mongoose"
// Import Message to ensure it's registered before Chat tries to reference it
import "./Message"

export interface IChat extends Document {
  _id: mongoose.Types.ObjectId
  visitorId: string
  visitorName?: string
  visitorEmail?: string
  messages: mongoose.Types.ObjectId[]
  lastMessage: string
  lastMessageTime: Date
  lastMessageSender: "user" | "admin" | "bot"
  unreadCount: number
  status: "active" | "closed" | "archived"
  readAt?: Date
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

const chatSchema = new Schema<IChat>(
  {
    visitorId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    visitorName: {
      type: String,
    },
    visitorEmail: {
      type: String,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    lastMessage: {
      type: String,
    },
    lastMessageTime: {
      type: Date,
      default: Date.now,
    },
    lastMessageSender: {
      type: String,
      enum: ["user", "admin", "bot"],
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "closed", "archived"],
      default: "active",
    },
    readAt: {
      type: Date,
    },
    assignedTo: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

// Index for faster queries
chatSchema.index({ lastMessageTime: -1 })
chatSchema.index({ status: 1 })

export const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", chatSchema)
