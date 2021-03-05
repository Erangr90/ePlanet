import mongoose from 'mongoose'

const hallKindSchema = mongoose.Schema(
  {
    price: {
      type: [Number,'Hall kind price must be a number only'],
      required: [true,'Hall kind price is required'],
      min:[0,'Hall kind price can not be smaller then 0'],
      max:[30,'Hall kind price can not be more then 30 dollars']
    },
    kind:{
        type: String,
        required: [true,'kind of hall kind is required'],
        uniq:[true,'Hall kind already exist'],
        minlength:[2,'Kind can not shorter then 2 notes'],
        maxlength:[255,'Kind can not longer then 255 notes']
    }
  },{timestamps: true,})

const hallKind = mongoose.model('HallKind', hallKindSchema)

export default hallKind
