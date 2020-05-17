import { extend } from 'lodash';
import { join } from 'path';
let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
};
if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081,
  };
  config = extend(config, localConfig);
}
if (process.env.NODE_ENV == 'production') {
  const prodConfig = {
    port: 80,
  };
  config = extend(config, prodConfig);
}
export default config;
