import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import Tool from '../models/tool.js';

router.get('/tool-list', async (req, res) => {
  try {
    const toolList = await Tool.find({});
  if(!toolList) {
    return res.status(404).json({msg: 'Tool list not found'});
  }
    res.status(200).json(toolList);
  } catch (err) {
    res.status(500).json({msg: 'Server error'}); //error: err
  }
});

router.get('/tool-list/:toolId', async (req, res) => {
  try {
    const toolId = parseInt(req.params.toolId);
    const tool = await Tool.find(tool => tool.id === toolId);
    if(!tool) {
      return res.status(404).json({msg: 'Tool not found'});
    }
    res.json(tool);
  } catch (err) {
    res.status(500).json({msg: 'Server error'})
  }
});

router.delete('/tool-list/:toolId', async (req, res) => {
  try {
    const toolId = parseInt(req.params.toolId);
    const tool = await Tool.findById(toolId);
    if(!tool) {
      return res.status(404).json({msg: 'Tool not found'});
    }
    await Tool.findByIdAndDelete(toolId);
    res.status(200).json({msg: 'Tool deleted successfully'});
    //res.redirect('/tool-list');
  } catch (err) {
    res.status(500).json({msg: 'Server error'})
  }
})

router.post('/tool-list', async (req, res) => {
  const {name, id, quantity, category, condition, description} = req.body
  try {
      const newTool = new Tool({
        name,
        id,
        quantity,
        category,
        condition,
        description
      })
      await newTool.save();
      res.status(201).json({ msg: 'Tool entered successfully' });
  } catch(err) {
    res.json('error')
  }
})

export default router;

  //app.get('/', (req, res) => {
  //   res.send('Tool Management System is running!');
  // });
  
  // app.post('/available-tools', async (req, res) => {
  //   const newTool = new Tool(req.body);
  //   await newTool.save();
  //   res.redirect(`/available-tools/${newTool._id}`)
  //   //console.log(newTool)
  //   res.send('making your product')
  // })
  
  // app.get('/available-tools/new', (req, res) => {
  //   //res.render('template')
  // })
  
  // app.get('/available-tools/:serialNumber/edit', async (req, res) => {
  //   const { serialNumber } = req.params;
  //   const tool = await Tool.findById(serialNumber);
  //   //res.render('template')
  // })
  
  // app.put('/available-tools/:serailNumber', async (req, res) => {
  //   const {serailNumber} = req.params;
  //   const tool = await Tool.findByIdAndUpdate(serailNumber, req.body, {runValidators: true, new: true})
  //   res.redirect(`/available-tools/${tool._id}`)
  //   console.log(req.body)
  //   res.send('PUT!!')
  // })
  
  // app.get('/available-tools', async (req, res) => {
  //   try {
  //     //logic to retrieve available tools
  //     const availableTools = await Tool.find({})
  //     console.log(availableTools)
  //     res.send('ALL PRODUCTS ARE HEREE!!!')
  //     //res.status(200).json({availableTools});
  //   } catch (err) {
  //     console.log(err)
  //     //res.status(500).json({message: 'Server error'});
  //   }
  // });
  
  // app.get('/available-tools/:serialNumber', async (req, res) => {
  //   try {
  //     const { serialNumber } = req.params;
  
  //     // Logic to retrieve a tool by ID
  //     const tool = await Tool.findById(serialNumber)
  //     console.log(tool)
  //     res.send('details page!')
  //     ///res.render(template)
  //     //res.status(200).json({ tool });
  //   } catch (err) {
  //     console.log(err);
  //     //res.status(500).json({ message: 'Server error' });
  //   }
  // })
  
  // app.delete('/available-tools/:serialNumber', async (req, res) => {
  //   const {serialNumber} = req.params;
  //   const tool = await Tool.findByIdAndDelete(serialNumber);
  //   res.redirect('/available-tools');
  //   res.send('DELETING...')
  // })