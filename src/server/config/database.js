const databaseConfig = {
	mongodb: {
		adapter: 'mongodb',
		host: 'localhost',
		port: 27017,
		user: '',
		password: '',
		database: 'TutorialDB'
	},

	postgres: {
		adapter: 'postgresdb',
		host: 'localhost',
		port: 5432,
		user: 'neeraj.dixit',
		password: '',
		database: 'postgres'
	}
};

export default databaseConfig;