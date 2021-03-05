import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
  {

  },{timestamps: true,})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
