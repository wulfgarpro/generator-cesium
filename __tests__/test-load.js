/*global describe, it */

'use strict';

var assert  = require('assert');

describe('generator-cesium', function () {
    it('can be imported without blowing up', function () {
        assert(require('../generators/app') !== undefined);
    });
});
