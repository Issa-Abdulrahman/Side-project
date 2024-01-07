const { Meme, User } = require('../models');

const MemeController = {
  // Create a new meme
  async createMeme(req, res) {
    try {
      const newMeme = await Meme.create({
        image: req.body.image,
        caption: req.body.caption,
        userId: req.body.userId, // Assuming userId is provided in the request body
      });
      res.status(201).json(newMeme);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating meme' });
    }
  },

  // Get all memes
  async getAllMemes(req, res) {
    try {
      const memes = await Meme.findAll();
      res.status(200).json(memes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching memes' });
    }
  },

  // Get a single meme by ID
  async getMemeById(req, res) {
    const memeId = req.params.id;
    try {
      const meme = await Meme.findByPk(memeId, {
        include: [{ model: User, attributes: ['id', 'firstName', 'lastName', 'email'] }],
      });

      if (!meme) {
        res.status(404).json({ error: 'Meme not found' });
        return;
      }

      res.status(200).json(meme);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching meme' });
    }
  },

  // Update a meme by ID
  async updateMeme(req, res) {
    const memeId = req.params.id;
    try {
      const meme = await Meme.findByPk(memeId);
      if (!meme) {
        res.status(404).json({ error: 'Meme not found' });
        return;
      }

      // Update meme fields
      meme.image = req.body.image || meme.image;
      meme.caption = req.body.caption || meme.caption;
      meme.userId = req.body.userId || meme.userId;

      await meme.save();
      res.status(200).json(meme);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating meme' });
    }
  },

  // Delete a meme by ID
  async deleteMeme(req, res) {
    const memeId = req.params.id;
    try {
      const meme = await Meme.findByPk(memeId);
      if (!meme) {
        res.status(404).json({ error: 'Meme not found' });
        return;
      }
      await meme.destroy();
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting meme' });
    }
  },
};

module.exports = MemeController;
