/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/

const endOfLine = require('os').EOL;
const fs = require('fs');

var color = require('../index');

function writeStream(file, options = { flags: 'a' }, writeCopy = true) {
    if (fs.existsSync(file)) fs.unlinkSync(file);
    let stream = fs.createWriteStream(file, options);
    if (writeCopy)
        stream.write(`/*
Copyright (c) 2016-2019 Rory Claasen
The MIT License (MIT)
*/
`);
    return stream;
}

function orderColors(colors) {
    const orderedColors = {};
    Object.keys(colors).sort().forEach(function (key) {
        orderedColors[key] = colors[key];
    });
    return orderedColors;
}

const buildDir = './dist';

color.processColors.then(colors => {
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
    }

    const less = writeStream(`${buildDir}/colors.less`);
    const scss = writeStream(`${buildDir}/colors.scss`);
    const css = writeStream(`${buildDir}/colors.min.css`);

    var template = fs.readFileSync('scripts/template.md', 'utf8');
    var readme = writeStream('readme.md', { flags: 'w' }, false);

    readme.write(template + endOfLine);
    readme.write(`## Colors${endOfLine + endOfLine}`);
    readme.write(`### Name Changes${endOfLine + endOfLine}`);
    readme.write(`| Language | Css Identifier |${endOfLine}`);
    readme.write(`|:--:|:--:|${endOfLine}`);

    for (var key in color.replace_names) {
        readme.write(`|${key}|${color.replace_names[key].replace(' ', '-')}|${endOfLine}`);
    }

    readme.write(`${endOfLine}### Preview${endOfLine + endOfLine}`);

    const orderedColors = orderColors(colors);
    console.log(`Found ${Object.keys(orderedColors).length} colors to save`)
    for (const key in orderedColors) {
        const data = orderedColors[key];
        less.write(`@${data.class}:${data.color};${endOfLine}`);
        scss.write(`$${data.class}:${data.color};${endOfLine}`);
        css.write(`.gh-${data.class}{color:${data.color};}`);
        css.write(`.gh-bg-${data.class}{background-color:${data.color};}`);
        readme.write(`![${key}](http://www.placehold.it/150/${data.color.replace('#', '')}/ffffff?text=${key.split(' ').join('%20')})${endOfLine}`);
    }

    less.end();
    scss.end();
    css.end();
    readme.end();
    console.log('Saved less, scss, css & readme');
}).catch(err => {
    console.error('Unable to process colors');
    console.error(err.message);
});
