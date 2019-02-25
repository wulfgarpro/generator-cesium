'use strict';

const Generator = require('../generators/app');
jest.mock('yeoman-generator');

describe('generator-cesium/app Test', () => {
  var cesiumGenerator;
  beforeEach(() => {
    cesiumGenerator = new Generator();
    Object.defineProperty(cesiumGenerator, 'fs', { get: () => Object });
    Object.defineProperty(cesiumGenerator, 'props', { get: () => Object });
    cesiumGenerator.props.app_name = 'someapp'; // eslint-disable-line camelcase
    cesiumGenerator.fs.copyTpl = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('generator functions', () => {
    it('has initializing()', function () {
      expect(cesiumGenerator.initializing).toBeDefined();
    });
    it('has prompting()', function () {
      expect(cesiumGenerator.prompting).toBeDefined();
    });
    it('has writing()', function () {
      expect(cesiumGenerator.writing).toBeDefined();
    });
    it('has conflicts()', function () {
      expect(cesiumGenerator.conflicts).toBeDefined();
    });
    it('has install()', function () {
      expect(cesiumGenerator.install).toBeDefined();
    });
    it('has end()', function () {
      expect(cesiumGenerator.end).toBeDefined();
    });
  });

  describe('resetDestinationRoot()', () => {
    it('calls Generator\'s destinationRoot()', function () {
      cesiumGenerator.resetDestinationRoot('somepath');
      expect(cesiumGenerator.destinationRoot).toHaveBeenCalledTimes(1);
      expect(cesiumGenerator.destinationRoot).toHaveBeenCalledWith('somepath');
    });
  });

  describe('cesiumizeExpress()', () => {
    it('calls Generator\'s fs.copyTpl() for generator template files', function () {
      cesiumGenerator.props.viewer_context = 'somecontext'; // eslint-disable-line camelcase

      cesiumGenerator.cesiumizeExpress();
      expect(cesiumGenerator.fs.copyTpl).toHaveBeenCalledTimes(2);
      expect(cesiumGenerator.fs.copyTpl).toHaveBeenNthCalledWith(1, undefined, undefined, { 'viewerContext': 'somecontext' });
      expect(cesiumGenerator.fs.copyTpl).toHaveBeenNthCalledWith(2, undefined, undefined);
      expect(cesiumGenerator.templatePath).toHaveBeenCalledTimes(2);
      expect(cesiumGenerator.templatePath).toHaveBeenNthCalledWith(1, 'app.js');
      expect(cesiumGenerator.templatePath).toHaveBeenNthCalledWith(2, 'public/html');     
      expect(cesiumGenerator.destinationPath).toHaveBeenCalledTimes(2);
      expect(cesiumGenerator.destinationPath).toHaveBeenNthCalledWith(1, 'someapp/app.js');
      expect(cesiumGenerator.destinationPath).toHaveBeenNthCalledWith(2, 'someapp/public/html');
    });
  });

  describe('prompting()', () => {
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
    
    cesiumGenerator.prompting();
    expect(cesiumGenerator.prompt).toHaveBeenCalledTimes(1);
    expect(cesiumGenerator.prompt).toHaveBeenCalledWith(prompts);  
  });
  
  describe('configuring()', () => {
    it('calls Generator\'s destinationRoot()', function () {
      cesiumGenerator.configuring();
      expect(cesiumGenerator.destinationRoot).toHaveBeenCalledTimes(1);
    });
  });

  describe('install()', () => {
    it('calls Generator\'s npmInstall()', function () {
      cesiumGenerator.install();
      expect(cesiumGenerator.npmInstall).toHaveBeenCalledTimes(1);
      expect(cesiumGenerator.npmInstall).toHaveBeenCalledWith(['cesium'], { save: true });
    });
  });

  describe('end()', () => {
    it('calls Generator\'s resetDestinationRoot() and then cesiumizeExpress()', function () {
      jest.spyOn(cesiumGenerator, 'resetDestinationRoot');
      jest.spyOn(cesiumGenerator, 'cesiumizeExpress');
      cesiumGenerator.root = 'someroot';

      cesiumGenerator.end();
      expect(cesiumGenerator.resetDestinationRoot).toHaveBeenCalledTimes(1);
      expect(cesiumGenerator.resetDestinationRoot).toHaveBeenCalledWith('someroot');
      expect(cesiumGenerator.cesiumizeExpress).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('generateExpress()', () => {
    it('calls composeWith() for generator/express', function() {
      cesiumGenerator.generateExpress();
      expect(cesiumGenerator.composeWith).toHaveBeenCalledTimes(1);
      expect(cesiumGenerator.composeWith).toHaveBeenCalledWith(require.resolve('generator-express/app'), {dirname: 'someapp', createDirectory: 'n'});
    });
  });
});
