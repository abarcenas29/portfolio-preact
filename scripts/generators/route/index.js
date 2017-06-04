const componentExist = require('@utils/componentExists.js')
const { PROJECT_DIR } = require('@root/settings')

module.exports = {
  description: 'Add a Route to the router',
  prompts: [{
    type: 'input',
    name: 'componentName',
    message: 'Name of the Component to be routed',
    default: 'Home',
    validate: value => {
      if ((/.+/).test(value)) {
        if (componentExist(value)) {
          return true
        }
        return 'Component should exist'
      }

      return 'name is required'
    }
  }, {
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'containers',
    choices: () => ['containers', 'components']
  }, {
    type: 'input',
    name: 'path',
    message: 'Type the path of the component',
    default: '/about',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true
      }

      return 'path is required'
    }
  }],
  actions: data => {
    const actions = [
      {
        type: 'modify',
        path: `${PROJECT_DIR}/src/routes/Route.js`,
        pattern: /.* eslint-enable .*/g,
        templateFile: './route/route.bundle.loader.js.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: `${PROJECT_DIR}/src/routes/Route.js`,
        pattern: /.* BUNDLE GENERATOR .*/g,
        templateFile: './route/route.bundle.component.js.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: `${PROJECT_DIR}/src/routes/index.js`,
        pattern: /.* ROUTE HOOK .*/g,
        templateFile: './route/route.hook.js.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: `${PROJECT_DIR}/src/routes/index.js`,
        pattern: /{ *.* ROUTE GENERATOR .. }/g,
        templateFile: './route/route.js.hbs'
      }
    ]

    return actions
  }
}
