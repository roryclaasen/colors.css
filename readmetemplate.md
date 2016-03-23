# colors.css
Colors.css is a mapping of colors that github uses to represent different programming languages in their "Languages" tab on each repository. This project allows you to uses these colors in your webpages, to view them click [here](#colors)

### Usage
Download this [file](https://github.com/GOGO98901/colors.css/blob/master/colors.min.css) and link it with your project.<br>
You can even set it up as [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) (this does work on github pages)
```html
<link rel="stylesheet" href="stylesheets/colors.min.css" />
```
```css
@import("https://raw.githack.com/GOGO98901/colors.css/master/colors.css")
```
#### Implementation
To use as background color use prefix
```
.gh-bg-(language)
```
To use as color use prefix
```
.gh-(language)
```
