import test from 'ava';
import env from '.';

test.beforeEach(() => {
	delete process.env.NODE_ENV;
});

test('main', t => {
	t.true(typeof env.isDev === 'function');
	t.true(typeof env.isProd === 'function');
	t.true(typeof env.isTest === 'function');
	t.true(typeof env.isDebug === 'function');
});

test('process.env.NODE_ENV = development', t => {
	process.env.NODE_ENV = 'development';

	t.true(env.isDev());
	t.false(env.isProd());
	t.false(env.isTest());
	t.false(env.isDebug());
});

test('process.env.NODE_ENV = production', t => {
	process.env.NODE_ENV = 'production';

	t.true(env.isProd());
	t.false(env.isDev());
	t.false(env.isTest());
	t.false(env.isDebug());
});

test('process.env.NODE_ENV = test', t => {
	process.env.NODE_ENV = 'test';

	t.true(env.isTest());
	t.false(env.isDev());
	t.false(env.isProd());
	t.false(env.isDebug());
});

test('process.env.NODE_ENV = debug', t => {
	process.env.NODE_ENV = 'debug';

	t.true(env.isDebug());
	t.false(env.isDev());
	t.false(env.isProd());
	t.false(env.isTest());
});

test('no env', t => {
	t.false(env.isDev());
	t.false(env.isProd());
	t.false(env.isTest());
	t.false(env.isDebug());
});
