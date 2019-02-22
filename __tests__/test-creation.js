'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var rimraf = require('rimraf');

describe('generator-cesium/app Test', () => {
  beforeEach(() => {
     return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        viewerContext: '/',  // eslint-disable-line camelcase
        appName: 'app'       // eslint-disable-line camelcase
      })
  });
  afterEach(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });

  it('creates expected custom files', function () {
    assert.file([
      'app/app.js',
      'app/public/html/index.html',
    ]);

    assert.fileContent([
      ['app/app.js', /cesium/],
      ['app/public/html/index.html', /cesiumgateway/],
    ]);
  });


  xit('creates expected express files', function () {
    // TODO
  });
});
