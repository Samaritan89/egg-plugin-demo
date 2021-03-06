# egg-plugin-demo

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-plugin-demo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-demo
[travis-image]: https://img.shields.io/travis/eggjs/egg-plugin-demo.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-plugin-demo
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-plugin-demo.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-plugin-demo?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-plugin-demo.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-plugin-demo
[snyk-image]: https://snyk.io/test/npm/egg-plugin-demo/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-demo
[download-image]: https://img.shields.io/npm/dm/egg-plugin-demo.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-demo

<!--
Description here.
-->

## Install

```bash
$ npm i egg-plugin-demo --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pluginDemo = {
  enable: true,
  package: 'egg-plugin-demo',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pluginDemo = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
