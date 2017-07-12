'se strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('generator-express/app'), {});
  }

  prompting() {
    const prompts = [{
      type: 'input',
      name: 'path',
      message: 'Your Cesium URI path (e.g. /cesium)',
      default: '/'
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath('app.js'),
      this.templatePath('index.html'),
      this.destinationPath('public/index.html')
    );
  }

  installCesium() {
    this.npmInstall(['cesium'], {save: true});
  }

  install() {
    this.installDependencies();
  }

  end() {
  }
};
