const User = {
	identity: 'user',
	tableName: 'user',
	migrate: 'safe',
  	connection: 'mongoDB',//'mongoDB',
  	  attributes: {
    	userID: {type: 'string', columnName: 'name'},
    	password: {type: 'string', columnName: 'password'},
	} 
};

export default User;