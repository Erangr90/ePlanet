import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'


import users from './data/users.js'
import movies from './data/movies.js'
import shows from './data/shows.js'
import hallKinds from './data/hallKinds.js'
import halls from './data/halls.js'


import User from './models/user.js'
import Show from './models/show.js'
import Movie from './models/movie.js'
import Hall from './models/hall.js'
import HallKind from './models/hallKind.js'
import Order from './models/order.js'


import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Show.deleteMany()
    await User.deleteMany()
    await Movie.deleteMany()
    await Hall.deleteMany()
    await HallKind.deleteMany()

    await User.insertMany(users)
    await HallKind.insertMany(hallKinds)
    await Movie.insertMany(movies)
    await Hall.insertMany(halls)
    await Show.insertMany(shows)


    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Show.deleteMany()
    await User.deleteMany()
    await Movie.deleteMany()
    await Hall.deleteMany()
    await HallKind.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}