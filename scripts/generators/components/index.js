const componentExist = require('@utils/componentExists.js')
const { PROJECT_DIR } = require('@root/settings')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'input',
    name: 'componentName',
    message: 'Name your component',
    default: 'Home',
    validate: (value) => {
      // check if its empty
      if ((/.+/).test(value)) {
        if (componentExist(value)) {
          return 'Component already exist somewhere'
        }
        return true
      }

      return 'name is required'
    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'containers',
    choices: () => ['containers', 'components']
  }],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: `${PROJECT_DIR}/src/{{type}}/{{properCase componentName}}/index.js`,
        templateFile: './components/component.js.hbs',
        abortOnFail: true
      }
    ]

    return actions
  }
}
