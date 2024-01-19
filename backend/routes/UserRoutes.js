import  express from "express";

import {getAllUsers, getUserById, updateUser, deleteUser} from "../controllers/UserController.js"

const router = express.Router();

router.get('/allusers', getAllUsers);
router.get('singleuser/:id', getUserById);
router.delete('/delete', deleteUser);
router.patch('/update', updateUser);


export default router;