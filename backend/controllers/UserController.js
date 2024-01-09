import db from "../models/index.js";

// const {User} = require('../models');
const { UserModel, MemeModel } = db;

export const creatUser = async (req, res) => {
  const { firstName, lastName, email, password} = req.body;
        try{
            const newUser = await UserModel.create({
                firstName,
                lastName,
                email,
                password
            });


            res.status(201).json(newUser);
        }catch(error){
            console.error(error);
            res.status(500).json({
                error: 'Error creating user'
            });
        }
    }
export const getAllUsers = async (req, res) => {
        try {
          const users = await UserModel.findAll();
          res.status(200).json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ 
            error: 'Error fetching users' 
        });
        }
      }
export const getUserById = async(req, res) => {
        const userId = req.params.id;
        try {
          const user = await UserModel.findByPk(userId);
          if (!user) {
            res.status(404).json({ 
                error: 'User not found' 
            });
            return;
          }
          res.status(200).json(user);
        } catch (error) {
          console.error(error);
          res.status(500).json({ 
            error: 'Error fetching user' 
        });
        }
      }
export const updateUser = async(req, res) => {
        const userId = req.params.id;
        try {
          const user = await UserModel.findByPk(userId);
          if (!user) {
            res.status(404).json({
                 error: 'User not found' 
                });
            return;
          }
          user.firstName = req.body.firstName || user.firstName;
          user.lastName = req.body.lastName || user.lastName;
          user.email = req.body.email || user.email;
          user.password = req.body.password || user.password;

        await user.save();
        res.status(200).json(user);
       }catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'Error updating user' 
        });
        }
       }
export const deleteUser = async(req, res) => {
         const userId = req.params.id;
         try {
            const user = await UserModel.findByPk(userId);
            if (!user) {
                res.status(404).json({ 
                    error: 'User not found' 
                });
                return;
            }
            await user.destroy();
            res.status(204).send();
            } catch (error) {
            console.error(error);
            res.status(500).json({ 
                error: 'Error deleting user' 
            });
            }
        }


// module.exports = UserController;