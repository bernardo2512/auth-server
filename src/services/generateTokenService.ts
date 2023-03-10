import jwt from 'jsonwebtoken';
const secret = process.env.SECRET_TOKEN as string;

export const generateTokenService = (paylaod:any) => {
    return jwt.sign(paylaod,secret,{expiresIn: 60});
}