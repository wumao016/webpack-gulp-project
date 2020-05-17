import { addAliases } from 'module-alias';
addAliases({
  '@root': __dirname,
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models',
});
import Koa from 'koa';
import render from 'koa-swig';
import config from './config';
import { wrap } from 'co';
import { configure, getLogger } from 'log4js';
import { error } from './middlewares/errorHandler';
const app = new Koa();
import serve from 'koa-static';
const { port, viewDir, staticDir } = config;
configure({
  appenders: { cheese: { type: 'file', filename: './logs/yd.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } },
});
const logger = getLogger('cheese');
// const { historyApiFallback } = require('koa2-connect-history-api-fallback');
app.use(serve(staticDir));
// app.use(historyApiFallback({ index: "/", whiteList: ['/api'] }));
app.context.render = wrap(
  render({
    root: viewDir,
    autoescape: true,
    cache: process.env.NODE_ENV == 'development' ? false : 'memory',
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false,
  })
);
error(app, logger);
// 路由注册中心
require('./controllers').default(app);
app.listen(port, () => {
  console.log('🍺服务启动成功', port);
});
