let Generator = require('yeoman-generator');

module.exports = class extends Generator {
	initializing() {
		this.composeWith(require.resolve('generator-express/app'), {});
	}
	prompting() {
		return this.prompt([{
			type: 'input',
			name: 'path',
			message: 'Your Cesium URI path (e.g. /cesium)',
			default: '/'
		}]).then((answers) => {
			this.log('URI path is', answers.path);
		});
	}
};
