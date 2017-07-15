'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'viewer',
        message: 'Type the context path to Cesium viewer (e.g. /cesium):',
        default: '/'
      },
      {
        type: 'input',
        name: 'app_name',
        message: 'Type the name for your express app:'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  configuring() {
    this.composeWith(require.resolve('generator-express/app'), {dirname: this.props.app_name, createDirectory: 'n'});
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('app.js'),
      this.destinationPath(this.props.app_name + '/app.js'), {
        viewer: this.props.viewer_context
      });
    this.fs.copyTpl(
      this.templatePath('html/index.html'),
      this.destinationPath(this.props.app_name + '/public/html/index.html')
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
