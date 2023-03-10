import { NextFunction, Request, Response, Router } from "express";
import { JwtPayload } from "jsonwebtoken";
import { userRepository } from "../repository/userRepository";
import { generateTokenService } from "../services/generateTokenService";
import { verifyTokenService } from "../services/verifyTokenService";

const router = Router();

const verifyJWT = (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers.authorization
    try {
       verifyTokenService(token)
       next()
    }catch(err){
        res.sendStatus(401);
    }
}


router.get("/",(req,res) => {
    res.send({status:"UP"})
})

router.post("/login", async (req,res) =>{
    const {user, pass} = req.body
    const userFinded = await userRepository.findOneBy({user,pass})
    if(userFinded){
        const token = generateTokenService({userId:userFinded.id});
        return res.json({auth:true,token})
    }
    res.sendStatus(401);
})

router.get("/users",verifyJWT,async (req,res) => {
    const users = await userRepository.find();
    res.json(users)
})

router.get("/verify",async (req,res) => {
    const token = req.headers.authorization
    try {
       const decoded = verifyTokenService(token) as JwtPayload
       res.json({...decoded, auth:true})
    }catch(err){
        res.json({auth:false})
    }
})


export default router;