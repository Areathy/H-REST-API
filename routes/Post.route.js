const express = require('express');
const router = express.Router();
const postModel = require('../models/post.model');


// Get ALL post
router.get('/', async (req, res) => {
   try {
      const posts = await postModel.find();
      res.json(posts);
   } catch (err) {
      res.json({ message: err });
   }

});

// Submit post
router.post('/', async (req, res) => {
   const post = new postModel({
      name: req.body.name,
      description: req.body.description
   });
   try {
      const savedPost = await post.save();
      res.json(savedPost);
   } catch (err) {
      res.json({ message: err });
   }
});

// Gets SPECIFIC post
router.get('/:postId', async (req, res) => {
   try {
      const post = await postModel.findById(req.params.postId);
      res.json(post);
   } catch (err) {
      res.json({ message: err });
   }

});

// Delete a specific post
router.delete('/:postId', async (req, res) => {
   try {
      const removePost = await postModel.remove({ _id: req.params.postId });
      res.json(removePost);
   } catch (err) {
      res.json({ message: err });
   }
});

// update a specific post
router.patch('/:postId', async (req, res) => {
   try {
      const updatePost = await postModel.updateOne({ _id: req.params.postId }, { $set: { name: req.body.name } });
      res.json(updatePost);
   } catch (err) {
      res.json({ message: err });
   }

});


module.exports = router;