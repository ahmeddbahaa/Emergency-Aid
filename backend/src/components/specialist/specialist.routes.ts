import express from 'express';
import SpecialistController from './specialist.controller';

const specialistRouter = express.Router();

specialistRouter.get('/specialists',  SpecialistController.getSpecialists);
specialistRouter.get('/specialists/:id', SpecialistController.getSpecialist);
specialistRouter.post('/specialists', SpecialistController.create);

export default specialistRouter;