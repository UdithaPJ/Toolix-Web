//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const  userSchema = new mongoose.Schema({
  // [{
  //   "_id": {
  //     "$oid": "65c98278c2e2e36a64b1a507"
  //   },
  //   "username": "admin_user",
  //   "email": "admin@example.com",
  //   "password": "hashed_password",
  //   "role": "admin",
  //   "firstName": "Admin",
  //   "lastName": "User"
  // }]

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'instructor', 'student']
  },
  checkedOutTools: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tool' }]
  // firstName: {
  //   type: String,
  //   required: true
  // },
  // lastName: {
  //   type: String,
  //   required: true
  // }
  //checkedOutTools: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tool' }]
})

//const User = mongoose.model('User', userSchema);

//module.exports = User;
export default mongoose.model('User', userSchema);