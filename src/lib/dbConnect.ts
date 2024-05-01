import mongoose from "mongoose";

type ConnectionObject = {
  // ? here means this value is optional but if there it will be only number
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // First we have to check the connection, if it is estd or not to remove the db chking
  if (connection.isConnected) {
    console.log("Already connected to the Database");
    return;
  }

  //   Then check for database connection
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit();
  }
}

export default dbConnect;
