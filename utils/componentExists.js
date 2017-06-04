const fs = require('fs')
const path = require('path')

const pageComponents = fs.readdirSync(path.join('.', 'src', 'components'))
const pageContainers = fs.readdirSync(path.join('.', 'src', 'containers'))
const components = pageComponents.concat(pageContainers)

module.exports = (name) => {
  return components.indexOf(name) > 0
}
