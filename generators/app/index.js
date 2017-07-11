let Generator = require('yeoman-generator');

module.exports = class extends Generator {
	initializing() {
		this.composeWith(require.resolve('generator-express/app'), {});
	}
};
