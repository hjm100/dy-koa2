const kluy = require('./kluy/core');
const compress = require('koa-compress');
const http = require('http');
const config = require('./config/serve.config.js');

const app = new kluy();
// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Max-Age', 3600 * 24);
  await next();
});

// compressor
app.use(compress({
  filter: contentType => /text|javascript/i.test(contentType),
  threshold: 2048
}));

// 使用新建的路由文件
app.setRouters();

// 监听在1234
http.createServer(app.callback()).listen(config.port);

console.log(`服务运行在 ${config.port}`)
