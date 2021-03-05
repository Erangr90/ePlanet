import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
  {
      name:{
          type:String,
          minlength:[2,'Name must be longer then 2 letters'],
          maxlength:[255,'Name must be shorter then 255 letters'],
          required:[true,'Name is']
      }

  },{timestamps: true,})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
