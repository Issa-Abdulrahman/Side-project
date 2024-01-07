import db from "../models/index.js";

const {User} = require('../models');

const UserController ={
    async creatUser(req, res){
        try{
            const newUser = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            })
            res.status(201).json(newUser);
        }catch(error){
            console.error(error);
            res.status(500).json({
                error: 'Error creating user'
            });
        }
    },
    async getAllUsers(req, res) {
        try {
          const users = await User.findAll();
          res.status(200).json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ 
            error: 'Error fetching users' 
        });
        }
      },
    async getUserById(req, res) {
        const userId = req.params.id;
        try {
          const user = await User.findByPk(userId);
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
      },
      async updateUser(req, res) {
        const userId = req.params.id;
        try {
          const user = await User.findByPk(userId);
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
       },
       async deleteUser(req, res) {
         const userId = req.params.id;
         try {
            const user = await User.findByPk(userId);
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
        },
};

module.exports = UserController;