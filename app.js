const fs = require('fs');
const path = require('path');

module.exports = app => {
  // 把 cost 中间件放到 bodyParser 之前
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  app.config.coreMiddleware.splice(index, 0, 'cost');

  app.customData = fs.readFileSync(path.join(app.config.baseDir, 'package.json'));
  app.coreLogger.info('read data ok');
};
