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

Run your new cesium server:
```bash
cd app/
npm start
```


**NOTE:**
Since generator-cesium runs in compose mode with generator-express, you'll have to select 'y' when
asked if you'd like to overwrite app.js.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [James Fraser](https://www.wulfgar.pro)


[npm-image]: https://badge.fury.io/js/generator-cesium.svg
[npm-url]: https://npmjs.org/package/generator-cesium
[travis-image]: https://travis-ci.org/wulfgarpro/generator-cesium.svg?branch=master
[travis-url]: https://travis-ci.org/wulfgarpro/generator-cesium
[daviddm-image]: https://david-dm.org/wulfgarpro/generator-cesium.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wulfgarpro/generator-cesium
