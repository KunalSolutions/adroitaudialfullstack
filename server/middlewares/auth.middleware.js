import jwt from 'jsonwebtoken';

import UserModel from '#models/user.model.js';

const protect = async (req, res, next) => {
	let token;

	// 1. COOKIE TOKEN
	if (req.cookies && req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	// 2. HEADER TOKEN (fallback)
	if (!token && req.headers.authorization?.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token.');
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await UserModel.findById(decoded.id).select('-password');

		next();
	} catch (error) {
		console.error(error);
		res.status(401);
		throw new Error('Not authorized, token failed!');
	}
};

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an administrator.');
	}
};

export { admin, protect };
