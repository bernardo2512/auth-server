import jwt from 'jsonwebtoken';
const secret = process.env.SECRET_TOKEN as string;

export const verifyTokenService = (token:any) => {
    return jwt.verify(token,secret);
}