'use strict';

const Generator = require('../generators/app');
jest.mock('yeoman-generator');

describe('generator-cesium/app Test', () => {
  var cesiumGenerator;
  beforeEach(() => {
    cesiumGenerator = new Generator();
    Object.defineProperty(cesiumGenerator, 'fs', { get: () => Object });
    Object.defineProperty(cesiumGenerator, 'props', { get: () => Object });
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
    it('calls Generator\'s fs.copyTpl() for app.js template', function () {
      cesiumGenerator.props.app_name = 'someapp'; // eslint-disable-line camelcase
      cesiumGenerator.props.viewer_context = 'somecontext'; // eslint-disable-line camelcase

      cesiumGenerator.cesiumizeExpress();
      expect(cesiumGenerator.fs.copyTpl).toHaveBeenCalledTimes(2);
      expect(cesiumGenerator.templatePath).toHaveBeenCalledWith('app.js');
      expect(cesiumGenerator.destinationPath).toHaveBeenCalledWith('someapp/app.js');
      expect(cesiumGenerator.templatePath).toHaveBeenCalledWith('public/html');
      expect(cesiumGenerator.destinationPath).toHaveBeenCalledWith('someapp/public/html');
    });
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
});
