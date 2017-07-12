'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	initializing() {
		this.composeWith(require.resolve('generator-express/app'), {});
	}

	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the striking ' + chalk.red('generator-cesium') + ' generator!'
		));

		const prompts = [{
			type: 'input',
			name: 'path',
			message: 'Your Cesium URI path (e.g. /cesium)',
			default: '/'
		}];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	writing() {
		/*this.fs.copy(
			this.templatePath('dummyfile.txt'),
			this.destinationPath('dummyfile.txt')
		);*/
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
