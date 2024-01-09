import express from "express";

import { createMeme, getAllMemes, getMemeByUserId, updateMeme, getMemeById, deleteMeme} from "../controllers/MemeController.js"

import uploadImage from "../middlewares/multer.js";

import { authenticate, checkRole } from "../middlewares/authmiddlewares.js";
const  router = express.Router();
router.get('/allMemes', getAllMemes);
router.get('/singleMeme/:id', getMemeById);
router.get('/userMeme/:userId', getMemeByUserId);
router.post('/add', authenticate, uploadImage.single('image'), createMeme);
router.delete('/delete', authenticate, deleteMeme);
router.patch('/update', authenticate, updateMeme);

export default router;

