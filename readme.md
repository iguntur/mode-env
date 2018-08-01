# mode-env [![Build Status](https://travis-ci.org/iguntur/mode-env.svg?branch=master)](https://travis-ci.org/iguntur/mode-env)

> Check `process.env.NODE_ENV`

---


## Install

```
$ npm install mode-env
```


## Usage

```js
const env = require('mode-env');

// Equivalent: process.env.NODE_ENV === 'development'
console.log(env.isDev());

// Equivalent: process.env.NODE_ENV === 'production'
console.log(env.isProd());

// Equivalent: process.env.NODE_ENV === 'test'
console.log(env.isTest());

// Equivalent: process.env.NODE_ENV === 'debug'
console.log(env.isDebug());
```


## API

### env.isDev()

### env.isProd()

### env.isTest()

### env.isDebug()

Return a boolean value


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
