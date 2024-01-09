import db from '../models/index.js';

const { Meme, User } = db;

export const createMeme = async (req, res) => {
  const { image, caption, userId } = req.body;
  try {
    const newMeme = await Meme.create({
      image,
      caption,
      userId,
    });

    res.status(201).json({ message: 'Meme created successfully', data: newMeme });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.findAll();
    res.status(200).json({ data: memes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMemeById = async (req, res) => {
  const memeId = req.params.id;
  try {
    const meme = await Meme.findByPk(memeId, {
      include: [{ model: User, attributes: ['id', 'firstName', 'lastName', 'email'] }],
    });

    if (!meme) {
      res.status(404).json({ message: 'Meme not found' });
    } else {
      res.status(200).json({ data: meme });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMeme = async (req, res) => {
  const memeId = req.params.id;
  try {
    const meme = await Meme.findByPk(memeId);
    if (!meme) {
      res.status(404).json({ message: 'Meme not found' });
    } else {
      meme.image = req.body.image || meme.image;
      meme.caption = req.body.caption || meme.caption;
      meme.userId = req.body.userId || meme.userId;

      await meme.save();
      res.status(200).json({ message: 'Meme updated successfully', data: meme });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMeme = async (req, res) => {
  const memeId = req.params.id;
  try {
    const meme = await Meme.findByPk(memeId);
    if (!meme) {
      res.status(404).json({ message: 'Meme not found' });
    } else {
      await meme.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
