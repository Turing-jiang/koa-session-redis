# Koa session store with redis example
## Installation
```
$ npm install
```
## Run
```
$ node server.js
```
## Usage
This example works with <a href="https://github.com/koajs/session">koa-session</a> and <a href="https://github.com/luin/ioredis">ioredis</a>

## Options
all ioredis options - Useful things include url, host, port, and path to the server. Defaults to 127.0.0.1:6379
```
const redis = new Redis(6379, "localhost", { password: "123456" });
```
session config - includes cookie key (default is koa.sess), maxAge in ms (default is 1 days), for more details <a>https://github.com/koajs/session</a>
```
const SESSION_CONFIG = {
  key: "sessionid", //cookie key (default is koa.sess)
  maxAge: 60 * 1000, // expire: 1 minute
  store: new RedisSessionStore(redis),
};
```
