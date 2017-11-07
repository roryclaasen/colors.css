#!/usr/bin/env node
/*
* Copyright (c) 2016-2017 Rory Claasen
* The MIT License (MIT)
*/
'use strict';

const program = require('commander');
const util = require('util');
const pkg = require('./package.json');
const endOfLine = require('os').EOL;
const fs = require('fs');

var color = require('./index');

program.version(pkg.version).description(pkg.description)
.option('-l, --less', 'Builds Less source file')
.option('-s, --scss', 'Builds Sass source file')
.option('-c, --css', 'Builds css source file')
.option('-a, --all', 'Builds all source files')
.parse(process.argv);

if (!(program.less || program.scss || program.css || program.all)) program.help();
else {
    var newWriteStream = function(file, options) {
        if (options === undefined) options = { flags: 'a' };
        if (fs.existsSync(file)) fs.unlinkSync(file);
        return fs.createWriteStream(file, options);
    }

    color.processColors(function(err, colors) {
        if (err) throw err;
        if (colors != undefined) {
            var less = (program.less || program.all) ? newWriteStream('colors.less') : undefined;
            var scss = (program.scss || program.all) ? newWriteStream('colors.scss') : undefined;
            var css = (program.css || program.all) ? newWriteStream('colors.min.css') : undefined;

            if (less) less.write(color.copyright);
            if (scss) scss.write(color.copyright);
            if (css) css.write(color.copyright);

            for (var key in colors) {
                var data = colors[key];
                if (less) less.write(util.format('@%s:%s;%s', data.class, data.color, endOfLine));
                if (scss) scss.write(util.format('$%s:%s;%s', data.class, data.color, endOfLine));
                if (css) {
                    css.write(util.format('.gh-%s{color:%s;}', data.class, data.color));
                    css.write(util.format('.gh-bg-%s{background-color:%s;}', data.class, data.color));
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
        }
    });
}
