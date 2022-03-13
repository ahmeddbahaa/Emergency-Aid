import express, { Express } from 'express';
import userRouter from './user/user.routes';
import specialistRouter from './specialist/specialist.routes';

const apiRouter = express.Router();

apiRouter.use(userRouter);
apiRouter.use(specialistRouter);

export default apiRouter;