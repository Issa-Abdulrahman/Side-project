import { Express } from "express";
import db from "./models/index.js";
import memesRoutes from "./routes/MemesRoutes.js"


import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/meme', memesRoutes);

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