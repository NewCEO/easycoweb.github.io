var expressSession = require('express-session');
var RedisStore = require('connect-redis')(expressSession);

module.exports = function session (app) {
  app.use(expressSession({
    store: new RedisStore({
      hosts: 'localhost',
      port:	'6379',
      prefix: 'session:'
    }),
    secret: 'easy cow secret',
    cookie: { maxAge: 60000 },
    name: 'easycowSession',
    resave: false
  }));
}
