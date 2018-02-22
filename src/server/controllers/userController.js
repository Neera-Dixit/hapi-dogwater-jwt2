import Util from '../config/util';

const userController = {

	getUsers: (request, response) => {
		const User = request.collections(true).user;

		User.find().exec((err, userList) => {
			Util.sendResponse(response, err, userList);
		});
	},

	getUserById: (request, response) => {
		const User = request.collections(true).user;

		User.findOne(request.params).exec((err, userData) => {
			Util.sendResponse(response, err, userData);
		});
	},

	addUser: (request, response) => {
		const User = request.collections(true).user;
		console.log(request.payload);
		User.create(request.payload).exec((err, userData) => {
			const token = Util.generateJWT(request.payload);
			const refreshToken = Util.refreshJWTToken(token);
			console.log("OLD Token : ",token);
			console.log("NEW Token : ",refreshToken);
			Util.sendResponse(response, err, userData);
		 });
	},

	deleteUser: (request, response) => {
		const User = request.collections(true).user;

		User.destroy({userID : request.params.userID}).exec((err, deletedUser) => {
			Util.sendResponse(response, err, deletedUser);
		});
	},

	updateUser: (request, response) => {
		const User = request.collections(true).user;
	
		User.update(request.params,request.payload).exec((err, updatedUser) => {
			Util.sendResponse(response, err, updatedUser);
		});
	}

};

export default userController;