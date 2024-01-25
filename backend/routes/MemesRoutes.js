import express from "express";
// const express = require("express");


import { createMeme, getAllMemes, getMemeByUserId, updateMeme, getMemeById, deleteMeme} from "../controllers/MemeController.js"

import uploadImage from "../middlewares/multer.js";

import { authenticate, checkRole } from "../middlewares/authmiddlewares.js";
const  router = express.Router();
router.get('/', getAllMemes);
router.get('/byId/:id', getMemeById);
router.get('/byUser/:userId', getMemeByUserId);
router.post('/', uploadImage.single('image'), createMeme);
router.delete('/', authenticate, deleteMeme);
router.patch('/', authenticate, updateMeme);

export default router;

