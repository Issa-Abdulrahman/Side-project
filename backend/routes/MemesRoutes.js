import express from "express";

import { createMeme, getAllMemes, getMemeByUserId, updateMeme, getMemeById, deleteMeme} from "../controllers/MemeController.js"

const  router = express.Router();
router.get('/allMemes', getAllMemes);
router.get('/singleMeme/:id', getMemeById);
router.get('/userMeme', getMemeByUserId);
router.post('/add', createMeme);
router.delete('/delete', deleteMeme);
router.patch('/update', updateMeme);

export default router;

