import constants from './constants';
import JWT from 'jsonwebtoken';
import JWTRefresh from 'jsonwebtoken-refresh';
const util = {
	sendResponse : (response, err, data) => {
		if (err) return response(err).code(500);

		if(!data){
			return response("NOT FOUND").code(404);
		}
		return response(data).code(200);
	},

	generateJWT : (payload, expiryTime) => {
		const JWTtoken = JWT.sign(payload, constants.JWT_SECRET, { expiresIn: expiryTime || 60});
		return JWTtoken;
	},

	validateJWTToken : (decoded, request, callback) => {
		console.log("decoded");
		console.log(decoded);
	},

	refreshJWTToken: (token, expiryTime) => {
		const originalDecoded = JWT.decode(token, {complete: true});
		const refreshToken = JWTRefresh.refresh(originalDecoded, expiryTime || 3600, constants.JWT_SECRET);
		return refreshToken;
	}
}

export default util;