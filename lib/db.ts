// lib/db.ts
import mongoose, { ConnectOptions } from 'mongoose';

// const uri: string | undefined = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error('MONGODB_URI environment variable is not defined');
// }

// export async function connectDB(): Promise<void> {
//   try {

//     const options: ConnectOptions = {}; 
//     await mongoose.connect(uri, options);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error; 
//   }
// }


if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const MONGODB_URI: string = process.env.MONGODB_URI;

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
      .then((mongoose) => {
        console.log(mongoose)
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}