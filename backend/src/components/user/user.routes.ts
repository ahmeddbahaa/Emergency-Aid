import express from 'express';
import UserController from './user.controller';

const userRouter = express.Router();

userRouter.get('/users',  UserController.getUsers);
userRouter.get('/users/:id', UserController.getUser);
userRouter.post('/users', UserController.signUp);

export default userRouter;