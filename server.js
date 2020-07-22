const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const session = require("koa-session");
const Redis = require("ioredis");
const RedisSessionStore = require("./session-store");

const redis = new Redis(6379, "localhost", { password: "123456" });

const SESSION_CONFIG = {
  key: "sessionid", //cookie key (default is koa.sess)
  maxAge: 60 * 1000, // expire: 1 minute
  store: new RedisSessionStore(redis),
};

app.keys = ["some secret hurr"];
app.use(session(SESSION_CONFIG, app));

router.get("/set/user", async (ctx) => {
  ctx.session.user = {
    name: "turing",
    age: 18,
  };
  ctx.body = "set session success";
});

router.get("/del/user", async (ctx) => {
  ctx.session = null;
  ctx.body = "destory session success";
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("koa server is listening on port 3000");
});
