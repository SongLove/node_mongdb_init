// index.js
const Koa = require('koa');
const config = require('./config');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')// 处理post请求，把 koa2 上下文的表单数据解析到

const app = new Koa();
const server = require('http').createServer(app.callback())
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    console.log(`${ctx.method}`, `${ctx.url}`);
    if (ctx.method == 'OPTIONS') {
        ctx.response.body = 200;
    } else {
        await next();
    }
})
app.use(bodyParser());
// 划分模块
router.use('/test', require('./routers/test'))


app.use(router.routes())
server.listen(config.serverUrl, () => {
  console.log('server listenIng on port: ' + config.serverUrl)
})