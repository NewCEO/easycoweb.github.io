//Set user configuration based on user env

module.exports = {
  backend_v1: `${process.env.API_URL}:${process.env.API_PORT}/api/v1/`
}