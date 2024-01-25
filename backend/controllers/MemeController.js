import db from '../models/index.js';
import { where } from 'sequelize';

const { MemeModel, UserModel } = db;

export const createMeme = async (req, res) => {
  const { caption, userId } = req.body;
  const image = req.file.path;
  try {
    const newMeme = await MemeModel.create({
      image: image,
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
    const memes = await MemeModel.findAll();
    res.status(200).json({ data: memes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMemeByUserId = async (req,res) => {
  const { userId } = req.params;
  try{
    const memeUser = await MemeModel.findAll(
      userId, {include: [UserModel]}
    )
    return res.status(200).json(memeUser)
  }catch(error){
    return res.status(400).json({error: error.message});
  }
}

export const getMemeById = async (req, res) => {
  const {memeId} = req.params;
  try {
    const meme = await MemeModel.findByPk(memeId, {
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
  const {memeId} = req.params;
  const {caption, userId} = req.body;
  const image = req.file.path;
  try {
    const meme = await MemeModel.findByPk(memeId);
    if (!meme) {
      res.status(404).json({ message: 'Meme not found' });
    } else {

      image:image,
      caption,
      userId,
     

      await meme.save();
      res.status(200).json({ message: 'Meme updated successfully', data: meme });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMeme = async (req, res) => {
  const {memeId} = req.params;
  try {
    const meme = await MemeModel.findByPk(memeId);
    if (!meme) {
      res.status(404).json({ message: 'Meme not found' });
    } else {
      await meme.destroy({where: {memeId}});
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
