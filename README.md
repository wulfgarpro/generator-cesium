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
? Type the context path to Cesium viewer (e.g. /cesium): /
? Type the name for your express app: app
? Select a version to install: Basic
? Select a view engine to use: Pug
? Select a css preprocessor to use: None
? Select a build tool to use: Grunt
   create .editorconfig
   create .gitignore
   create app.js
   create bin/www
   create package.json
   create routes/index.js
   create routes/user.js
   create views/error.pug
   create views/index.pug
   create views/layout.pug
   create public/css/style.css
   create Gruntfile.js
? Overwrite app/app.js? (ynaxdH) *y*
```

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
