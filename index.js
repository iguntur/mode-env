'use strict';

exports.isDev = function () {
	return process.env.NODE_ENV === 'development';
};

exports.isProd = function () {
	return process.env.NODE_ENV === 'production';
};

exports.isTest = function () {
	return process.env.NODE_ENV === 'test';
};

exports.isDebug = function () {
	return process.env.NODE_ENV === 'debug';
};
