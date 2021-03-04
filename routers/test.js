const Router = require('koa-router');
const Models = require('../db/model');
const ModelDB = require('../db');
const router = new Router();

router.get('/', async (ctx, next) => {
    await Models['test'].find(ctx.query).then(res => {
        ctx.response.body = res;
    })
})

module.exports = router.routes();
