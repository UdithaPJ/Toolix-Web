// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const router = express.Router();
import User from '../models/user.js';
//const UserController = require('../controllers/userController.js');

//router.get('/signin', UserController.signin);
//router.get('/available-tools', UserController.viewAvailableTools);

router.get('/login', async (req, res) => {
  
})

//a post request
router.post('/login', async (req, res) => {
  const {username, password} = req.body
  try {
    const check = await User.findOne({username: username})
    if(check.password === password) {
      //res.render('home')
      res.json('exist')
    }
    else {
      res.json('not exist')
    }
  } catch(err) {
    res.json('check error')
  }
})

router.get('/sign-in', (req, res) => {

})

//route for signup is same as login
router.post('/sign-in', async (req, res) => {
  const {username, email, password, role} = req.body
  const data = {
    username: username,
    email: email,
    password: password,
    role: role
  }
  try {
    const checkUsername = await User.findOne({username: username});
    const checkEmail = await User.findOne({email: email});

    if(checkUsername || checkEmail) {
      res.json('exist')
    }
    else {
      res.json('not exist')
      const newUser = new User({
        username,
        email,
        password,
        role
      })
      await newUser.save();
      res.status(201).json({ msg: 'User registered successfully' });
    }
  } catch(err) {
    res.json('error')
  }
})

//forgotpassword
router.post('/forgotpassword', async (req, res) => {
  const {username, password} = req.body
  try {
    const check = await User.findOne({username: username})
    if(check) {
      //res.render('home')
      res.json('exist')
      res.json(check)
    }
    else {
      res.json('not exist')
      //return res.status(404).json({msg: 'Tool list not found'});
    }
  } catch(err) {
    res.json('check error')
  }
})

//forgotusername
router.post('/forgotusername', async (req, res) => {
  const {username} = req.body
  try {
    const check = await User.findOne({username: username})
    if(check) {
      //res.render('home')
      res.json('exist')
      res.json(check)
    }
    else {
      res.json('not exist')
      //return res.status(404).json({msg: 'Tool list not found'});
    }
  } catch(err) {
    res.json('check error')
  }
})

router.delete(':username', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user) {
      return res.status(404).json({msg: 'Tool not found'});
    }
    await User.findByIdAndDelete(userId);
    res.status(200).json({msg: 'Tool deleted successfully'});
    //res.redirect('/tool-list');
  } catch (err) {
    res.status(500).json({msg: 'Server error'})
  }
})


router.get('', async (req, res) => {
  try {
    // Find the user by ID and populate the checkedOutTools field
    const user = await User.findById(userId).populate('checkedOutTools');
    if(!user) {
      return res.status(404).json({msg: 'User not found'});
    }
    return user.checkedOutTools;
  } catch (err) {
    //console.error('Error getting checked out tools:', error);
    //throw error;
    res.status(500).json({msg: 'Server error'})
  }
})


//module.exports = router;
export default router;