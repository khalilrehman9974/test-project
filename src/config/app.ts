import dotenv from 'dotenv';
import {Options} from 'sequelize';
dotenv.config();

export const environment = process.env.NODE_ENV;
export const appConfig = {
  port: process.env.PORT || 3000,
  appInsightsKey: process.env.APP_INSIGHTS_KEY || '3343434343F4',
  serviceName: process.env.SERVICE_NAME || 'APP_SERVICE',
};

// Firebase server key for sending push notifications
export const fcmServerKey = {
  key:
    'AAAAf1fxlDw:APA91bGx73mwQk_vNfouBTYDRAI1RbzwfH-ssJZZw4o_OHC-UNBKnuS6WqRkyM388RbJ0GuKJRv2AvOKOFPtLRo6fogFsWxqY1owMAwH03xhJMe_orKj6Z22Gh4DIayrnaQuxMYi4G2I',
};

export const dbConfig: Options = {
  username: process.env.DB_USERNAME || 'adfads',
  password: process.env.DB_PASSWORD || 'adfadf',
  database: process.env.DB_NAME || 'adfadf',
  host: process.env.DB_HOST || 'afadsf',
  port: parseInt(process.env.DB_PORT_NEW) || 5432333,
  pool: {
    max: 20,
    min: 1,
    idle: 60000,
    evict: 20000,
  },
  dialect: 'postgres',
  dialectOptions: {
    options: {
      keepAlive: true,
      requestTimeout: 300000,
      connectTimeout: 6000000,
      encrypt: true,
    },
    ssl: {
      require: true,
    },
  },
};
