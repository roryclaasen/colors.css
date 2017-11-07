/*
* Copyright (c) 2016-2017 Rory Claasen
* The MIT License (MIT)
*/
'use strict';

const util = require('util');
var fs = require('fs');
var yaml = require('js-yaml');
var download = require('download-file');
var endOfLine = require('os').EOL;

var filename = 'languages.yml';

var replace_names = {
    'C++': 'cpp',
    'Objective-C++': 'Objective-Cpp',
    'C#': 'C Sharp',
    'F#': 'F Sharp',
    'NetLinx+ERB': 'NetLinx-ERB',
    'Ren\'Py': 'RenPy'
}

var notice = `/*
Copyright (c) 2016-2017 Rory Claasen
The MIT License (MIT)
*/
`

var newWriteStream = function(file, options) {
    if (options === undefined) options = { flags: 'a' };
    if (fs.existsSync(file)) fs.unlinkSync(file);
    return fs.createWriteStream(file, options);
}

var processColors = function(callback) {
    download('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml', function(err) {
        if (err) callback(err, undefined);
        else {
            try {
                var doc = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
                fs.unlinkSync(filename);

                var colors = {}
                for (var key in doc) {
                    var obj = doc[key];
                    if ('color' in obj) {
                        var keyClass = key;
                        if (keyClass in replace_names) keyClass = replace_names[key];
                        colors[key] = {
                            'color': obj['color'],
                            'class': keyClass.split(' ').join('-')
                        }
                    }
                }
                callback(false, colors);
            } catch(err) {
                callback(err, undefined);
            }
        }
    });
};

processColors(function(err, colors) {
    if (err) throw err;
    if (colors != undefined) {
        var less = newWriteStream('dist/colors.less');
        var scss = newWriteStream('dist/colors.scss')
        var css = newWriteStream('dist/colors.min.css')

        var template = fs.readFileSync('src/template.md', 'utf8');
        var readme = newWriteStream('readme.md', { flags: 'w' });

        less.write(notice);
        scss.write(notice);
        css.write(notice);
        readme.write(template);

        for (key in colors) {
            var color = colors[key];
            less.write(util.format('@%s:%s;%s', color['class'], color['color'], endOfLine));
            scss.write(util.format('$%s:%s;%s', color['class'], color['color'], endOfLine));
            css.write(util.format('.gh-%s{color:%s;}', color['class'], color['color']));
            css.write(util.format('.gh-bg-%s{background-color:%s;}', color['class'], color['color']));
            readme.write(util.format('![%s](http://www.placehold.it/150/%s/ffffff?text=%s)%s', key, color['color'].replace('#', ''), key.split(' ').join('%20'), endOfLine));
        }

        less.end();
        scss.end();
        css.end();
        readme.end();
    }
});
