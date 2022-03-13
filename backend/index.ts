import server from './app';
import { checkingEnvVariables } from './config/checking-env-variables';
import { startDbConnection } from './config/sequelize';
import Logger from './src/middlewares/logger';

const start = async() => {
  checkingEnvVariables();
  await startDbConnection();

  server.listen(5000, () => Logger.info('Listening on port 5000!'));
};

start();