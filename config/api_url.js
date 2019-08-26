//Set user configuration based on user env
let env                 = require('../nextServer/env');

module.exports = {
  backend_v1: `${env.API_URL}:${env.API_PORT}/api/v1/`
}