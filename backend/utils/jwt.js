import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const secretKey = `${process.env.JWT_SECRET}`;

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        'secret_key', { expiresIn: '24h' }); 
};

export const verifyToken = (token) => {
    return jwt.verify(token, 'secret_key');
};
