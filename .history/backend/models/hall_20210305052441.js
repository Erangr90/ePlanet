import mongoose from 'mongoose'

const seatSchema = mongoose.Schema(
    {
        number:{
            type:[Number,'Seat number must be a number only'],
            required:[true,'Seat number is required'],
            uniq:[true,'Seat number already exist'],
            min:[1,'Seat number can not be smaller then 1'],
            max:[300,'Seat number can not be bigger the 300']
        }
    },{timestamps: true,})



const hallSchema = mongoose.Schema(
  {
    number: {
      type: Number,
      required: [true,'Hall number is required'],
      uniq:[true,'Hall number already exist'],
      min:[1,'Hall number can not be smaller then 1'],
      max:[99,'Hall number can not be more then 2 digits']
    },
    hallKind:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,'Hall kind is required'],
        ref: 'HallKind'
    },
    seats:[seatSchema],
  },{timestamps: true,})

const Hall = mongoose.model('Hall', hallSchema)

export default Hall
