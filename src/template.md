# colors.css [![Build Status](https://travis-ci.org/roryclaasen/colors.css.svg?branch=node.js)](https://travis-ci.org/roryclaasen/colors.css)

Colors.css is a mapping of colors that github uses to represent different programming languages in their "Languages" tab on each repository. This project allows you to uses these colors in your webpages, to view them click [here](#colors)

### Usage

Download the file [colors.min.css](dist/colors.min.css) and link it with your project. Also available are [sass](dist/colors.scss) and [less](dist/colors.less) files to use with your projects.<br>
You can even set it up as [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Install it yourself

Clone or [download](https://github.com/GOGO98901/colors.css/archive/node.js.zip) this repository, then in the project folder run the command

```
npm install
npm run build
```

Contained inside the `dist` folder are the updated stylesheets.

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

## Colors
