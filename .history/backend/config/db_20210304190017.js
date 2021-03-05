// Node packages
import mongoose from 'mongoose'

// Create connection to the DataBase
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONN, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
