import mongoose, { Schema, Document } from "mongoose"

export interface IMessage extends Document {
  _id: mongoose.Types.ObjectId
  id: string
  content: string
  sender: "user" | "admin" | "bot"
  visitorId: string
  adminId?: string
  timestamp: Date
  isRead: boolean
  readAt?: Date
  readBy?: "user" | "admin"
  createdAt: Date
  updatedAt: Date
}

const messageSchema = new Schema<IMessage>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      enum: ["user", "admin", "bot"],
      required: true,
    },
    visitorId: {
      type: String,
      required: true,
      index: true,
    },
    adminId: {
      type: String,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
    },
    isRead: {
      type: Boolean,
      default: false,
      index: true,
    },
    readAt: {
      type: Date,
    },
    readBy: {
      type: String,
      enum: ["user", "admin"],
    },
  },
  {
    timestamps: true,
  }
)

// Optimized indexes for efficient queries
messageSchema.index({ visitorId: 1, timestamp: 1 }) // For message history
messageSchema.index({ sender: 1, visitorId: 1 }) // For sender filtering
messageSchema.index({ visitorId: 1 }) // Fast lookup by visitorId alone
messageSchema.index({ visitorId: 1, sender: 1, isRead: 1 }) // For unread received messages (high efficiency)
messageSchema.index({ isRead: 1, sender: 1 }) // For global unread query optimization

export const Message =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema)
