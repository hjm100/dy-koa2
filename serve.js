const Koa=require('koa');
const http = require('http');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const errorHandler = require('koa-error');
const etag = require('koa-etag');
const compress = require('koa-compress');
const app=new Koa() //上为npm包 下为js文件
const config = require('./config/serve.config.js');
const router = require('./router');
app.use(koaBody());

// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Max-Age', 3600 * 24);
  await next();
});

// 使用表单解析中间件
app.use(bodyParser())
app.use(errorHandler());
app.use(etag());
// compressor
app.use(compress({
    filter: contentType => /text|javascript/i.test(contentType),
    threshold: 2048
}));

// 使用新建的路由文件
router(app);

// 监听在1234
http.createServer(app.callback()).listen(config.port);

console.log(`服务运行在 ${config.port}`)
