import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import User from "./user.js";
// const User = require ('./user.js')
import Meme from "./meme.js";
// const Meme = require('./meme.js');


dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_TYPE,
        port: process.env.DB_PORT
    }
);

const UserModel = User(sequelize, Sequelize);
const MemeModel = Meme(sequelize, Sequelize);

const db= {
    sequelize,
    Sequelize,
    UserModel,
    MemeModel
};

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    })

    export default db;
