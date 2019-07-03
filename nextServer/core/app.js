global.__basedir 	= __dirname;
let  server    		= 	require('../bootstrap/server.js');
const next        = require('next');
const dev         = process.env.NODE_ENV !== 'production';
const app         = next({ dev });

app.prepare().then( ()=> {
  server 				    = 	new server();
  server.start(app);
});


