import { Express } from "express";
import db from "./models/index.js";
import memesRouters from "./routes/memesRoutes.js"


import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/meme', memesRouters);

app.listen( port, async() => {
    console.log(`server is running  on port ${port}`)
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})