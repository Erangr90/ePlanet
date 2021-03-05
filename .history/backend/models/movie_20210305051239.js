import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
  {
      name:{
          type:String,
          required:[true,'Movie name is required'],
          minlength:[2,'Movie name must be longer then 2 letters'],
          maxlength:[255,'Movie name must be shorter then 255 letters'],
          uniq:true
      },
      poster:{
        type:String,
        required:[true,'Poster is required']
      },
      genre:{
        type:String,
        required:[true,'Genre is required'],
        minlength:[2,'Genre must be longer then 2 letters'],
        maxlength:[255,'Genre must be shorter then 255 letters']
      },
      minAge:{
        type:[Number,'Minimum age must be a number'],
        required:[true,'Minimum age is required'],
        min:[0,'Age can not be smaller then 0'],
        max:[21,'Age can not be bigger then 21']
      },
      length:{
        type:[Number,'Length must be a number'],
        required:[true,'Length is required'],
        min:[45,'Length can not be shorter then 45 minutes'],
        max:[240,'Length can not be longer then 240 minutes (4 hours)']
      },
      price:{
        type:[Number,'Movie price must be a number'],
        required:[true,'Movie price is required'],
        min:[1,'Movie price can not be smaller then 1 dollar'],
        max:[14,'Movie price can not be bigger then 14 dollars']
      },
      discountedPrice:{
        type:[Number,'Discounted Price must be a number'],
        min:[1,'Discounted Price can not be smaller then 1 dollar'],
        max:[14,'Discounted Price can not be bigger then 14 dollars']
      },
      rating:{
        type:[Number,'Rating must be a number'],
        required:[true,'Rating is required'],
        min:[0,'Rating can not be smaller then 1'],
        max:[5,'Rating can not be bigger then 5 '],
        default:0
      },
      numOfRates:{
        type:[Number,'Number Of Rates must be a number'],
        required:[true,'Number Of Rates is required'],
        default:0
      }

  },{timestamps: true,})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
