/*
  Overrides the semantic-less module to fit into webpack distribution
  url: https://www.artembutusov.com/webpack-semantic-ui/
*/
var fs = require('fs-extra')
var path = require('path')
var projectDir = require('./../settings')

const PROJECT_DIR = projectDir.PROJECT_DIR

fs.copySync(
  path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'theme.config.example'),
  path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'theme.config'), () => {
    console.log('file copied')
  })

// relocate default config
fs.writeFileSync(
  path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'theme.config'),
  "@import '../../src/semantic/theme.config';\n",
  'utf8'
)

// fix well known bug with default distribution
fixFontPath(path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'themes', 'default', 'globals', 'site.variables'))
fixFontPath(path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'themes', 'flat', 'globals', 'site.variables'))
fixFontPath(path.resolve(PROJECT_DIR, 'node_modules', 'semantic-ui-less', 'themes', 'material', 'globals', 'site.variables'))

function fixFontPath (filename) {
  var content = fs.readFileSync(filename, 'utf8')
  var newContent = content.replace(
    "@fontPath  : '../../themes/",
    "@fontPath  : '../../../themes/"
  )
  fs.writeFileSync(filename, newContent, 'utf8')
}
