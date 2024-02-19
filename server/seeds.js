//const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const User = require('./models/user');

// mongoose.connect('mongodb://127.0.0.1:27017/toolixApp')
//   .then(() => {
//     console.log("MONGO CONNECTION OPEN!!")
//   })
//   .catch(err => {
//     console.log("MONGO CONNECTION ERROR!!")
//     console.log(err)
//   })

// const u = new User({
//   username: 'ABC',
//   email: 'abc@123.com',
//   password: '12345',
//   role: 'student',
//   firstName: 'abcd',
//   lastName: 'defg'
// })
// u.save()
//   .then(u => {
//     console.log(u)
//   })
//   .catch(e => {
//     console.log(err)
//   })

// User.insertMany({
//   username: 'ABCD',
//   email: 'abcd@123.com',
//   password: '212345',
//   role: 'student',
//   firstName: 'aabcd',
//   lastName: 'adefg'
// },
// {
//   username: 'ABCE',
//   email: 'abce@123.com',
//   password: '112345',
//   role: 'student',
//   firstName: 'babcd',
//   lastName: 'bdefg'
// },
// {
//   username: 'ABCF',
//   email: 'abcf@123.com',
//   password: '012345',
//   role: 'student',
//   firstName: 'cabcd',
//   lastName: 'cdefg'
// })
  // .then(u => {
  //   console.log(u)
  // })
  // .catch(e => {
  //   console.log(err)
  // })

//const Tool = require('./models/tool');
import Tool from './models/tool.js';
import User from './models/user.js';

mongoose.connect('mongodb://0.0.0.0:27017/toolixDB')
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!")
  })
  .catch(err => {
    console.log("MONGO CONNECTION ERROR!!")
    console.log(err)
  })

// const u = new User({
//   username: '102767',
//   email: 'abc@123.com',
//   password: '12345',
//   role: 'student',
//   firstName: 'abcd',
//   lastName: 'defg'
// })
// u.save()
//   .then(u => {
//     console.log(u)
//   })
//   .catch(e => {
//     console.log(err)
//   })
// Tool.insertMany({
//   name: 'Hammer1',
//   //serialNumber: 2323,
//   quantity: 5,
//   category: 'Hand Tools',
//   condition: 'new',
//   description: 'A versatile tool used for driving nails, breaking objects apart, and other construction tasks.'
// },
// {
//   name: 'Hammer2',
//   //serialNumber: 2324,
//   quantity: 8,
//   category: '1Hand Tools',
//   condition: 'new',
//   description: '1A versatile tool used for driving nails, breaking objects apart, and other construction tasks.'
// })
//   .then(u => {
//     console.log(u)
//   })
//   .catch(e => {
//     console.log(err)
//   })

// User.insertMany({
//   username: 'ABCD',
//   email: 'abcd@123.com',
//   password: '212345',
//   role: 'student',
//   firstName: 'aabcd',
//   lastName: 'adefg'
// },
// {
//   username: 'ABCE',
//   email: 'abce@123.com',
//   password: '112345',
//   role: 'student',
//   firstName: 'babcd',
//   lastName: 'bdefg'
// },
// {
//   username: 'ABCF',
//   email: 'abcf@123.com',
//   password: '012345',
//   role: 'student',
//   firstName: 'cabcd',
//   lastName: 'cdefg'
// })
//   .then(u => {
//     console.log(u)
//   })
//   .catch(e => {
//     console.log(err)
//   })

// Tool.deleteMany({})
//   .then(result => {
//     console.log(`${result.deletedCount} tools deleted successfully.`);
//   })
//   .catch(error => {
//     console.error('Error deleting tools:', error);
//   });

  // Tool.insertMany([
  //   {
  //     "name": "Screwdriver",
  //     "id": 1001,
  //     "status": "Available",
  //     "description": "A hand tool used for turning (driving) screws"
  //   },
  //   {
  //     "name": "Hammer",
  //     "id": 1002,
  //     "status": "Available",
  //     "description": "A tool used for driving nails, fitting parts, breaking objects, or forging metal"
  //   },
  //   {
  //     "name": "Drill",
  //     "id": 1003,
  //     "status": "In Use",
  //     "description": "A tool primarily used for making round holes or driving fasteners"
  //   },
  //   {
  //     "name": "Wrench",
  //     "id": 1004,
  //     "status": "Available",
  //     "description": "A tool used to provide grip and mechanical advantage in applying torque to turn objects"
  //   },
  //   {
  //     "name": "Pliers",
  //     "id": 1005,
  //     "status": "Available",
  //     "description": "A hand tool used to hold objects firmly"
  //   },
  //   {
  //     "name": "Saw",
  //     "id": 1006,
  //     "status": "In Repair",
  //     "description": "A tool consisting of a tough blade, wire, or chain with a hard-toothed edge"
  //   },
  //   {
  //     "name": "Tape Measure",
  //     "id": 1007,
  //     "status": "Available",
  //     "description": "A flexible ruler used to measure distance"
  //   },
  //   {
  //     "name": "Level",
  //     "id": 1008,
  //     "status": "Available",
  //     "description": "A tool used to determine if a surface is horizontal (level) or vertical (plumb)"
  //   },
  //   {
  //     "name": "Utility Knife",
  //     "id": 1009,
  //     "status": "In Use",
  //     "description": "A knife used for general or utility purposes"
  //   },
  //   {
  //     "name": "Screwdriver Set",
  //     "id": 1010,
  //     "status": "Available",
  //     "description": "A set of screwdrivers with various types and sizes"
  //   }
  // ])
  //   .then(result => {
  //     console.log(`${result.deletedCount} tools added successfully.`);
  //   })
  //   .catch(error => {
  //     console.error('Error adding tools:', error);
  //   });