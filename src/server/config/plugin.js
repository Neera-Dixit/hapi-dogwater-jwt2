import dogwaterOptions from './dogwater';
import Inert from 'inert';
import Vision from 'vision';
import dogwater from 'dogwater';
import hapiAuthJWT from 'hapi-auth-jwt2';

const plugins = [{
	register: Inert 
}, {
	register: Vision
},{
	register: dogwater,
	options: dogwaterOptions
},{
	register: hapiAuthJWT
}];

export default plugins;