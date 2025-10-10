import mongoose, { Mongoose } from 'mongoose';
import './../model/brandSchema';
import './../model/categorySchema';
import './../model/productSchema';


// Retrieve the MongoDB connection string from environment variables.
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tredexdb"

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * In a development environment, Next.js clears the Node.js cache on every request,
 * which would cause a new database connection to be established each time.
 * To prevent this, we store the Mongoose instance and promise in a global object.
 * This global object is not affected by the cache clearing.
 *
 * In production, this is not an issue as the application runs as a single process.
 */
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend the NodeJS Global type to include our mongoose cache.
declare const global: typeof globalThis & {
  mongoose: MongooseCache;
};

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes a connection to the MongoDB database.
 * If a connection already exists, it returns the cached connection.
 * Otherwise, it creates a new connection and caches it for future use.
 *
 * @returns {Promise<Mongoose>} A promise that resolves to the Mongoose instance.
 */
async function dbConnect(): Promise<Mongoose> {
  // If we have a cached connection, return it immediately.
  if (cached.conn) {
    console.log(' reusing existing database connection.');
    return cached.conn;
  }

  // If a connection promise doesn't exist, create one.
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Recommended for production
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      console.log('New database connection established.');
      return mongooseInstance;
    });
  }

  try {
    // Await the connection promise and cache the connection object.
    cached.conn = await cached.promise;
  } catch (e) {
    // If the connection fails, reset the promise and re-throw the error.
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
