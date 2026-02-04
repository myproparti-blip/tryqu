import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URI

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable")
}

// Import models to ensure they're registered AFTER mongoose is configured
import "./models/Message"
import "./models/Chat"

let cached = global as any

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn
  }

  if (!cached.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.mongoose.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose
      })
  }

  try {
    cached.mongoose.conn = await cached.mongoose.promise
  } catch (e) {
    cached.mongoose.promise = null
    throw e
  }

  return cached.mongoose.conn
}
