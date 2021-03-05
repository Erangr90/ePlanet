import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
  {
      name:{
          type:String,
          minlength:[2,'Name must be longer then 2 letters']
      }

  },{timestamps: true,})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
