import express from 'express';
import userController from '../controllers/user.controller';

const userRouter=express.Router();

userRouter.route('/register')
            .post(userController.register);
userRouter.route("/login")
            .post(userController.login);


export default userRouter;