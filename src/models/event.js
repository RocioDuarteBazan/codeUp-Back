import { Schema, model, Types } from "mongoose"

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  place: {
    type: Types.ObjectId,
    ref: 'place',
    required: true,
  },
  photo: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  // attendees: [{
  //   type: String,
  //   type: Types.ObjectId,
  //   ref: 'user',
  // }],
  minimumAge: {
    type: Number,
    required: true
  },
  // organizer: {
  //   type: String,
  //   type: Types.ObjectId,
  //   ref: 'user',
  //   required: true
  // },

})

const eventModel = model("event", eventSchema)

export default eventModel