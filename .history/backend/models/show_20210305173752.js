import mongoose from 'mongoose'


const showSchema = mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true,'Movie is required'],
      ref: 'Movie'
    },
    hall:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,'Hall is required']
    },
    date:{
        type: Date,
        required:[true,'Date is required']
    },
    time: {
        hour:{
            type:Number,
            required:[true,'The hour of the show is required'],
            min:[0,'Hour cant be smaller then 0'],
            max:[23,'Hour cant be bigger then 23']
        },
        minutes:{
            type:Number,
            required:[true,'The minutes of the show is required'],
            min:[0,'minutes cant be smaller then 0'],
            max:[59,'minutes cant be bigger then 59']
        }

    }
  },{timestamps: true,})

const Show = mongoose.model('Show', showSchema)

export default Show
