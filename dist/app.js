"use strict";

var _moduleAlias = require("module-alias");

var _koa = _interopRequireDefault(require("koa"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _config = _interopRequireDefault(require("./config"));

var _co = require("co");

var _log4js = require("log4js");

var _errorHandler = require("./middlewares/errorHandler");

var _koaStatic = _interopRequireDefault(require("koa-static"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _moduleAlias.addAliases)({
  '@root': __dirname,
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models'
});
const app = new _koa.default();
const {
  port,
  viewDir,
  staticDir
} = _config.default;
(0, _log4js.configure)({
  appenders: {
    cheese: {
      type: 'file',
      filename: './logs/yd.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});
const logger = (0, _log4js.getLogger)('cheese'); // const { historyApiFallback } = require('koa2-connect-history-api-fallback');

app.use((0, _koaStatic.default)(staticDir)); // app.use(historyApiFallback({ index: "/", whiteList: ['/api'] }));

app.context.render = (0, _co.wrap)((0, _koaSwig.default)({
  root: viewDir,
  autoescape: true,
  cache: process.env.NODE_ENV == 'development' ? false : 'memory',
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));
(0, _errorHandler.error)(app, logger); // 路由注册中心

require('./controllers').default(app);

app.listen(port, () => {
  console.log('🍺服务启动成功', port);
});