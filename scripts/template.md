# colors.css [![Build Status](https://travis-ci.org/roryclaasen/colors.css.svg?branch=node.js)](https://travis-ci.org/roryclaasen/colors.css)

Colors.css provides the colors that GitHub uses to represent different programming languages in their "Languages" tab on each repository. This project allows you to uses these colors in your webpages, to view them click [here](#colors)

## Stylesheets

Download the file [colors.min.css](dist/colors.min.css) and link it with your project. Also available are [sass](dist/colors.scss) and [less](dist/colors.less) files to use with your projects.

## Install it yourself

Clone or [download](https://github.com/roryclaasen/colors.css/archive/node.js.zip) this repository, then in the project folder run the command

```shell
$ npm install
  ...
```

### CLI

#### Usage

```shell
$ gh-color

  Usage: gh-color [options]

  GitHub colour codes for web development


  Options:

    -V, --version  output the version number
    -l, --less     Builds Less source file
    -s, --scss     Builds Sass source file
    -c, --css      Builds css source file
    -a, --all      Builds all source files
    -h, --help     output usage information
```

### Building yourself

```shell
$ npm run build
  ...
```

Contained inside the `dist` folder are the updated stylesheets.
(This will also update the readme)

#### Implementation

```html
<link rel="stylesheet" href="stylesheets/colors.min.css" />
```

```css
@import("colors.min.css")
```

To use as background color use prefix

```
.gh-bg-(language)
```

To use as color use prefix

```
.gh-(language)
```
