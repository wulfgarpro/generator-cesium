'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.resetDestinationRoot = function (root) {
      this.destinationRoot(root);
    };

    this.cesiumizeExpress = function () {
      this.fs.copyTpl(
        this.templatePath('app.js'),
        this.destinationPath(this.props.app_name + '/app.js'), {
          viewerContext: this.props.viewer_context
        }
      );
      this.fs.copyTpl(
        this.templatePath('public/html'),
        this.destinationPath(this.props.app_name + '/public/html')
      );
    };
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'viewer_context',
        message: 'Type the context path to Cesium viewer (e.g. /cesium):',
        default: '/'
      },
      {
        type: 'input',
        name: 'app_name',
        message: 'Type the name for your express app:',
        default: 'app'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  configuring() {
    // Unfortunately generator-express breaks consistency so we have to store original root.
    // This is restored later during conflicts() task.
    this.root = this.destinationRoot();
  }

  generateExpress() {
    this.composeWith(require.resolve('generator-express/app'), {dirname: this.props.app_name, createDirectory: 'n'});
  }

  install() {
    // Install Cesium npm package.
    this.npmInstall(['cesium'], {save: true});
  }

  end() {
    // Reset our original root; see configuring() task.
    this.resetDestinationRoot(this.root);
    // Copy across our template files with Cesium support app.js and index.html.
    this.cesiumizeExpress();
  }
};
