import { Request, Response } from 'express';
import Logger from '../../middlewares/logger';
import { ICreateSpecialist } from './specialist.interfaces';
import Specialist from './specialist.model';
require('dotenv').config();

class SpecialistController {
  async create(req:Request, res: Response){
    try{
      const dataObject: ICreateSpecialist = req.body;
      const specialist = await Specialist.create(dataObject);
      res.status(201).send(specialist);
    }
    catch (error) {
      Logger.log('Specialist Controller Error', error);
    }

  }
  async getSpecialist(req:Request, res: Response){
    try{
      const specialist = await Specialist.findOneById(+req.params.id);
      if (!specialist) {
        res.status(404).send({ message: 'User Not Found!' });
      }
      res.send(specialist);

    }catch(error){
      Logger.log('Specialist Controller Error', error);
    }
  }
  async getSpecialists(req:Request, res: Response){
    try{
      const specialists = await Specialist.findAll();
      res.send(specialists);
    }catch(error){
      Logger.log('Specialist Controller Error', error);
    }
  }
}

export default new SpecialistController();
