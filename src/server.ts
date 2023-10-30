import {app} from './app';
import {logger} from './util';
import sequelize from './config/sequelize';
// import {galleryCategoryLogsModel} from './models/galleryCategoryLogs.model';

sequelize
  .authenticate()
  .then(() => {
    logger.info('PUREFAMILY_ADMIN_DB_CONNECTED', 'SUCCESS');
  })
  .catch((error: any) => {
    logger.error('PUREFAMILY_ADMIN_DB_CONNECTION_FAILED', error);
  });

const server = app.listen(app.get('port'), async () => {
  // await galleryCategoryLogsModel.sync({force: true});
  logger.info(
    'APP_START',
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode`
  );
});

process.on('uncaughtException', error => {
  logger.error('UNHANDLED_REJECTION', error);
});

export default server;
