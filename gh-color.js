#!/usr/bin/env node
/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/
'use strict';

const program = require('commander');
const pkg = require('./package.json');
const endOfLine = require('os').EOL;
const fs = require('fs');

const color = require('./index');

program
    .version(pkg.version)
    .description(pkg.description)
    .option('-l, --less', 'Builds Less source file')
    .option('-s, --scss', 'Builds Sass source file')
    .option('-c, --css', 'Builds css source file')
    .option('-a, --all', 'Builds all source files')
    .parse(process.argv);

function writeStream(file, options = { flags: 'a' }) {
    if (fs.existsSync(file)) fs.unlinkSync(file);
    let stream = fs.createWriteStream(file, options);
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

if (!(program.less || program.scss || program.css || program.all)) program.help();
else {
    color.processColors.then(colors => {
        const less = (program.less || program.all) ? writeStream('colors.less') : undefined;
        const scss = (program.scss || program.all) ? writeStream('colors.scss') : undefined;
        const css = (program.css || program.all) ? writeStream('colors.min.css') : undefined;

        const orderedColors = orderColors(colors);
        for (const key in orderedColors) {
            const data = orderedColors[key];
            if (less) less.write(`@${data.class}:${data.color};${endOfLine}`);
            if (scss) scss.write(`$${data.class}:${data.color};${endOfLine}`);
            if (css) {
                css.write(`.gh-${data.class}{color:${data.color};}`);
                css.write(`.gh-bg-${data.class}{background-color:${data.color};}`);
            }
        }

        if (less) {
            console.log('Saved less file');
            less.end();
        }
        if (scss) {
            console.log('Saved sass file');
            scss.end();
        }
        if (css) {
            console.log('Saved css file');
            css.end();
        }
    }).catch(err => {
        console.error('Unable to process colors');
        console.error(err.message);
    });
}
