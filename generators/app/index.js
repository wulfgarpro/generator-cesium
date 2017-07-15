'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	initializing() {
		this.composeWith(require.resolve('generator-express/app'), {});
	}

	prompting() {
		const prompts = [
			{
				type: 'input',
				name: 'viewer_context',
				message: 'Context path to Cesium viewer (e.g. /cesium)',
				default: '/'
			},
			{
				type: 'input',
				name: 'app_name',
				message: 'The name for your express app?',
				default: '/'
			}
		];

		return this.prompt(prompts).then(props => {
			this.props = props;
		});
	}

	writing() {
		this.fs.copyTpl(
			this.templatePath('app.js'),
			this.destinationPath('app.js'), { 
				viewer: this.props.viewer_context
			});
		this.fs.copyTpl(
			this.templatePath('html/index.html'),
			this.destinationPath(props.app_name + 'public/html/index.html')
		);
	}

	installCesium() {
		this.npmInstall(['cesium'], { save: true });
	}

	install() {
		this.installDependencies();
	}

	end() {
	}
};
