require('module-alias/register')

const componentGenerator = require('./components')
const routeGenerator = require('./route')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('route', routeGenerator)
}
