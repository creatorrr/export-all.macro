# MIRROR:> [export-all.macro](https://github.com/lifeiscontent/export-all.macro)

<div align="center">
<h1>export-all.macro</h1>

<p>A babel-plugin-macro that allows you to export all files that match a glob</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Babel Macro][macros-badge]][babel-plugin-macros]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

You want to export all files that match a `glob` without having to export them
individually.

## This solution

This is a [babel-plugin-macro][babel-plugin-macros] which allows you to export files that
match a glob. It supports `export` statements for synchronous resolution.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Caveats](#caveats)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev export-all.macro
```

## Usage

Once you've [configured `babel-plugin-macros`](https://github.com/lifeiscontent/babel-plugin-macros/blob/master/other/docs/user.md) you can
import/require `export-all.macro`.

The `exportAll` functions accept a [`glob`][glob] and will transpile your code
to export statements for each file that matches the given glob.

Let's imagine you have a directory called `my-files` with the files
`a.js`, `b.js`, `c.js`, and `d.js`.

Here are a few before/after examples:

<!-- SNAP_TO_README:START -->
<!-- This section is generated by the other/snap-to-readme.js script. -->
<!-- Do not edit directly. -->

**`exportAll` uses static exports: README:1 `exportAll` uses static exports**

```javascript
import exportAll from 'export-all.macro'

exportAll('./files/*.js')

      ↓ ↓ ↓ ↓ ↓ ↓

export * from './files/a.js'
export * from './files/b.js'
export * from './files/c.js'
export * from './files/d.js'
```

<!-- SNAP_TO_README:END -->

## Caveats

Some static analysis tools (like ESLint, Flow, and Jest) wont like this very much
without a little additional work. So Jest's watch mode may not pick up all your
tests that are relevant based on changes and some ESLint plugins
(like `eslint-plugin-import`) will probably fail on this.

## Inspiration

[Sunil Pai's tweet][sunil-tweet]

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://lifeiscontent.net/"><img src="https://avatars3.githubusercontent.com/u/180963?v=4" width="100px;" alt="Aaron Reisman"/><br /><sub><b>Aaron Reisman</b></sub></a><br /><a href="https://github.com/lifeiscontent/import-all/commits?author=lifeiscontent" title="Code">💻</a> <a href="https://github.com/lifeiscontent/import-all/commits?author=lifeiscontent" title="Documentation">📖</a> <a href="https://github.com/lifeiscontent/import-all/commits?author=lifeiscontent" title="Tests">⚠️</a> <a href="#tool-lifeiscontent" title="Tools">🔧</a> <a href="#example-lifeiscontent" title="Examples">💡</a> <a href="#userTesting-lifeiscontent" title="User Testing">📓</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/lifeiscontent/export-all.macro.svg?style=flat-square
[build]: https://travis-ci.org/lifeiscontent/export-all.macro
[coverage-badge]: https://img.shields.io/codecov/c/github/lifeiscontent/export-all.macro.svg?style=flat-square
[coverage]: https://codecov.io/github/lifeiscontent/export-all.macro
[version-badge]: https://img.shields.io/npm/v/export-all.macro.svg?style=flat-square
[package]: https://www.npmjs.com/package/export-all.macro
[downloads-badge]: https://img.shields.io/npm/dm/export-all.macro.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/export-all.macro
[license-badge]: https://img.shields.io/npm/l/export-all.macro.svg?style=flat-square
[license]: https://github.com/lifeiscontent/export-all.macro/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/lifeiscontent/export-all.macro/blob/master/other/CODE_OF_CONDUCT.md
[macros-badge]: https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square
[babel-plugin-macros]: https://github.com/lifeiscontent/babel-plugin-macros
[github-watch-badge]: https://img.shields.io/github/watchers/lifeiscontent/export-all.macro.svg?style=social
[github-watch]: https://github.com/lifeiscontent/export-all.macro/watchers
[github-star-badge]: https://img.shields.io/github/stars/lifeiscontent/export-all.macro.svg?style=social
[github-star]: https://github.com/lifeiscontent/export-all.macro/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20export-all.macro%20by%20%40lifeiscontent%20https%3A%2F%2Fgithub.com%2Flifeiscontent%2Fexport-all.macro%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/lifeiscontent/export-all.macro.svg?style=social
[emojis]: https://github.com/lifeiscontent/all-contributors#emoji-key
[all-contributors]: https://github.com/lifeiscontent/all-contributors
[glob]: https://www.npmjs.com/package/glob
[sunil-tweet]: https://twitter.com/threepointone/status/908290510225330176
