import Logger from '../../middlewares/logger';
import Common from '../../utils/common';
import { ICreateSpecialist, ISpecialistSerialized } from './specialist.interfaces';

class Specialist {
  static tableName: string = 'specialists';

  static async findOneById(id: number): Promise<ISpecialistSerialized | null>{
    try {
      const rows = await Common.dbFetch(Specialist.tableName, { id });
      if(rows?.length){
        const user = rows[0] as ISpecialistSerialized;
        return user;
      }
    } catch (error) {
      Logger.log('Specialist Model Error', error);
    }
    return null;
  }

  static async findAll(): Promise<ISpecialistSerialized[] | null>{
    try {
      const rows = await Common.dbFetch(
        Specialist.tableName,
        null,
        [
          'id',
          'education',
          'specialization',
          'name',
        ],
      );
      return rows as ISpecialistSerialized[];
    } catch (error) {
      Logger.log('Specialist Model Error', error);
    }
    return null;
  }

  static async create(specialist: ICreateSpecialist): Promise<ISpecialistSerialized | null>{
    try {
      const insertQuery = await Common.dbInsertion(Specialist.tableName, specialist);

      if(insertQuery && insertQuery.inserted){
        const newUser = insertQuery.data[0] as ISpecialistSerialized;

        return newUser;
      }
    } catch (error) {
      Logger.log('Specialist Model Error', error);
    }
    return null;
  }
}

export default Specialist;