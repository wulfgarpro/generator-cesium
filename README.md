# generator-cesium [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Cesium + Express webapp generator for Yeoman

## Installation

First, install [Yeoman](http://yeoman.io) and [generator-cesium](https://www.npmjs.com/package/generator-cesium) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)):
```bash
npm install -g yo
npm install -g generator-cesium
```

Then generate your new project:
```bash
yo cesium
```
NOTE: since generator-cesium is composed with generator-express, select _y_ when asked if you'd like to overwrite app.js.

Run your new cesium server:
```bash
cd app/
npm start
```

## License

MIT © [James Fraser](https://www.wulfgar.pro)


[npm-image]: https://badge.fury.io/js/generator-cesium.svg
[npm-url]: https://npmjs.org/package/generator-cesium
[travis-image]: https://travis-ci.org/wulfgarpro/generator-cesium.svg?branch=master
[travis-url]: https://travis-ci.org/wulfgarpro/generator-cesium
[daviddm-image]: https://david-dm.org/wulfgarpro/generator-cesium.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wulfgarpro/generator-cesium
