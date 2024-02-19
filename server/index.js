// const express = require('express');
// const app = express();

// const userRoutes = require('./routes/userRoutes');

// const path = require('path');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');

// const User = require('./models/user');
// const Tool = require('./models/tool');

import express from 'express';
import cors from 'cors';

const app = express();

//import userRoutes from './routes/userRoutes.js';

//import path from 'path';
import mongoose from 'mongoose';
//import methodOverride from 'method-override';

import User from './models/user.js';
import Tool from './models/tool.js';

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://0.0.0.0:27017/toolixDB')
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!")
  })
  .catch(err => {
    console.log("MONGO CONNECTION ERROR!!")
    console.log(err)
  })

  

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
//app.use(methodOverride('_method'));

//const toolRoutes = require('./routes/userRoutes.js');

//app.use('/api/users', userRoutes);
//app.use('/api/tools', toolRoutes);


app.post('/login', async (req, res) => {
  const {username, password} = req.body
  try {
    const user = await User.findOne({username: username})
    if(user) {
    if(user.password === password) {
      res.json({status: 'exist', user: user});
    }
    else {
      res.json({status: 'not exist', msg: 'User not found'});
      return;
    }
  } else {
    res.json({status: 'not exist', msg: 'User not found'});
      return;
  }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})

app.post('/sign-in', async (req, res) => {
  let role = 'student';
  const {username, email, password, selectedValue} = req.body
  if(selectedValue) {
    role = selectedValue;
  }
  console .log(selectedValue);
  const data = {
    username: username,
    email: email,
    password: password,
    role
  }
  try {
    const checkUsername = await User.findOne({username: username});
    const checkEmail = await User.findOne({email: email});

    if(checkUsername || checkEmail) {
      res.json({status: 'exist'});
    }
    else {
      const newUser = new User({
        username,
        email,
        password,
        role
      })
      console.log(newUser.username);
      await newUser.save();
      console.log('done');
      res.json({status: 'not exist', msg: 'User entered successfully'})
      //res.status(201).json({ msg: 'User registered successfully' });
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'});
  }
})

app.post('/forgotpassword', async (req, res) => {
  const {username} = req.body
  try {
    const user = await User.findOne({username: username})
    if(user) {
      res.json({status: 'exist'});
    }
    else {
      res.json({status: 'not exist', msg: 'User not found'});
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})

app.post('/forgotusername', async (req, res) => {
  const {email} = req.body
  try {
    const user = await User.findOne({email: email})
    if(user) {
      res.json({status: 'exist'});
    }
    else {
      res.json({status: 'not exist', msg: 'User not found'});
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})


app.put('/changepassword', async (req, res) => {
  const {username, oldpassword, password} = req.body
  try {
    const user = await User.findOne({username: username})
    if(user.password === oldpassword) {
      user.password = password;
      res.json({status: 'updated', msg: 'Password is changed successfully'})
    }
    else {
      res.json({status: 'not updated', msg: 'Incorrect password'});
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})

app.delete('/deleteAccount', async (req, res) => {
  const {username, password} = req.body
  try {
    const user = await User.findOne({username: username})
    console.log(password);
    if(user.password === password) {
      await User.deleteOne({username: username});
      console.log('deleted');
      res.json({status: 'deleted', msg: 'User is removed successfully'})
    }
    else {
      res.json({status: 'not deleted', msg: 'Incorrect password'});
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})

///routes for tools
app.get('/allToolList', async (req, res) => {
  try {
    const toolList = await Tool.find({}).populate('checkedOutBy'); // Populate the checkedOutBy field with user information
    if (!toolList || toolList.length === 0) {
      return res.json({ status: 'not exist', msg: 'Tool list not found' });
    }
    return res.json({ status: 'exist', toolList: toolList, msg: 'Tool list found' });
  } catch (err) {
    res.json({ msg: 'Server error' }); //error: err
  }
});

//toolDetails
app.post('/toolDetails', async (req, res) => {
  const {toolname} = req.body;
  try {
    const tool = await Tool.findOne({name: toolname});
  if(!tool) {
    return res.json({status: 'not exist', msg: 'Tool not found'});
  }
  return res.json({status: 'exist', tool: tool, msg: 'Tool found'});
  } catch (err) {
    res.json({msg: 'Server error'}); //error: err
  }
});


//instructerPage
//check-in
app.post('/toolCheckIn', async (req, res) => {
  const { id } = req.query;
  console.log(id);
  try {
    const tool = await Tool.findOne({ id: id });
    console.log(tool);
    if (!tool) {
      return res.json({ status: 'not exist', msg: 'Tool not found' });
    }
    if (tool.status === 'Available') {
      return res.json({ status: 'exist - available', msg: 'Tool found' });
    }

    // Find the user who checked out the tool
    const user = await User.findOne({ checkedOutTools: tool._id });
    if (user) {
      // Remove the tool from the user's checkedOutTools array
      await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { checkedOutTools: tool._id } }
      );
    }

    // Update the tool status to 'Available' and clear the checkedOutBy field
    const result = await Tool.findOneAndUpdate(
      { _id: tool._id },
      { $set: { status: 'Available', checkedOutBy: null } },
      { new: true }
    );

    console.log(result);
    return res.json({
      status: 'exist - in use',
      tool: result,
      msg: 'Tool checked in successfully',
    });
  } catch (err) {
    res.json({ msg: 'Server error' }); //error: err
  }
});


// app.post('/confirmToolCheckIn', async (req, res) => {
//   const {ToolID} = req.body;
//   console.log(ToolID);
//   try {
//     const tool = await Tool.findOne({id: ToolID});
//     console.log(tool);
//   if(!tool) {
//     return res.json({status: 'not exist', msg: 'Tool not found'});
//   }
//   if(tool.status === 'Available') {
//     return res.json({status: 'exist - available', msg: 'Tool found'});
//   }
//   const result = await Tool.findOneAndUpdate(
//     { _id: tool._id }, // Filter: find the tool by its ID
//     { $set: { status: 'Available' } }, // Update: set the specified attribute to the new value
//     { new: true } // Options: return the updated document
//   );
//   console.log(result);
//   return res.json({status: 'exist - in use', tool: result, msg: 'Tool found'});

//   } catch (err) {
//     res.json({msg: 'Server error'}); //error: err
//   }
// });


//instructerPage
//check-out
app.post('/toolCheckOut', async (req, res) => {
  const { ToolID, Name } = req.body;
  console.log({ ToolID, Name });
  try {
    const tool = await Tool.findOne({ id: ToolID });
    const user = await User.findOne({ username: Name }); // Assuming 'Name' is the username of the user

    if (!tool) {
      return res.json({ status: 'tool not exist', msg: 'Tool not found' });
    }
    if (!user) {
      return res.json({ status: 'user not exist', msg: 'User not found' });
    }
    if (tool.status === 'Available') {
      const resultTool = await Tool.findOneAndUpdate(
        { _id: tool._id },
        { $set: { status: 'In Use', checkedOutBy: user._id } },
        { new: true }
      );

      const resultUser = await User.findByIdAndUpdate(
        user._id,
        { $push: { checkedOutTools: resultTool._id } },
        { new: true }
      );

      console.log(resultTool, resultUser);
      return res.json({ status: 'tool checked out', tool: resultTool, user: resultUser, msg: 'Tool found' });
    } else {
      return res.json({ status: 'tool not available', msg: 'Tool is already checked out' });
    }
  } catch (err) {
    res.json({ msg: 'Server error' });
  }
});


// app.post('/confirmToolCheckIn', async (req, res) => {
//   const {ToolID} = req.body;
//   console.log(ToolID);
//   try {
//     const tool = await Tool.findOne({id: ToolID});
//     console.log(tool);
//   if(!tool) {
//     return res.json({status: 'not exist', msg: 'Tool not found'});
//   }
//   if(tool.status === 'Available') {
//     return res.json({status: 'exist - available', msg: 'Tool found'});
//   }
//   const result = await Tool.findOneAndUpdate(
//     { _id: tool._id }, // Filter: find the tool by its ID
//     { $set: { status: 'Available' } }, // Update: set the specified attribute to the new value
//     { new: true } // Options: return the updated document
//   );
//   console.log(result);
//   return res.json({status: 'exist - in use', tool: result, msg: 'Tool found'});

//   } catch (err) {
//     res.json({msg: 'Server error'}); //error: err
//   }
// });

app.post('/addTool', async (req, res) => {
  const {name, id, status, description} = req.body
  console.log({name, id, status, description});
  try {
    const toolId = await Tool.findOne({id: id});

    if(toolId) {
      res.json({status: 'exist'});
    }
    else {
      const newTool = new Tool({
        name,
        id,
        status,
        description
      })
      console.log(newTool.toolname);
      await newTool.save();
      console.log('done');
      res.json({status: 'not exist', msg: 'Tool entered successfully'})
      //res.status(201).json({ msg: 'User registered successfully' });
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'});
  }
})

app.delete('/removeTool', async (req, res) => {
  //the id should be in every place
  const { removeId } = req.query;
  console.log(removeId);
  try {
    const tool = await Tool.findOne({id: removeId})
    console.log(removeId);
    if(tool) {
      await Tool.deleteOne({id: removeId});
      console.log('deleted');
      res.json({status: 'deleted', msg: 'Tool is removed successfully'})
    }
    else {
      res.json({status: 'not deleted', msg: 'Tool not found'});
    }
  } catch(err) {
    res.json({status: 'error', error: 'Server error'})
  }
})

app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});

