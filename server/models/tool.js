//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const  toolSchema = new mongoose.Schema({
  // {
  //   "_id": {
  //     "$oid": "65c97fa8c2e2e36a64b1a4fc"
  //   },
  //   "name": "Hammer",
  //   "quantity": 5,
  //   "category": "Hand Tools",
  //   "condition": "New",
  //   "description": "A versatile tool used for driving nails, breaking objects apart, and other construction tasks."
  // }

  name: {
    type: String,
    required: true
  },
   id: {
     type: Number,
     required: true
   },
  // quantity: {
  //   type: Number,
  //   required: true
  // },
  // category: {
  //   type: String,
  //   required: true
  // },
  status: {
    type: String,
    required: true,
    //enum: ['new', 'used']
  },
  description: {
    type: String,
    //required: true
  },
  checkedOutBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // This refers to the User model
  }
})

//const Tool = mongoose.model('Tool', toolSchema);

//module.exports = Tool;
export default mongoose.model('Tool', toolSchema);