import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error('⚠️ Defina a variável de ambiente MONGO_URI no .env.local');
}
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export async function connectDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log('✅ MongoDB conectado');
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;

  return cached.conn;
}
