import MongoSails from 'sails-mongo';
import PostgresSails from 'sails-postgresql';
import dbConfig from './database';
import User from '../models/user';

const dogwaterOptions = {
	connections: {
    	mongoDB: dbConfig.mongodb,
    	postgresDB: dbConfig.postgres
  	},
  	adapters: {
    	mongodb: MongoSails,
    	postgresdb: PostgresSails
  	},
  	models: [User]
};

export default dogwaterOptions;