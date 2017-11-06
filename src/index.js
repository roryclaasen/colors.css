/*
Copyright (c) 2016-2017 Rory Claasen
The MIT License (MIT)
*/
var https = require('https');
var fs = require('fs');
var yaml = require('js-yaml');
var download = require('download-file')
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

download('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml', function(err){
    if (err) console.log(err);
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
        var fileOptions = { flags: 'a' };

        if (fs.existsSync('dist/colors.less')) fs.unlinkSync('dist/colors.less');
        var less = fs.createWriteStream('dist/colors.less', fileOptions);

        if (fs.existsSync('dist/colors.scss')) fs.unlinkSync('dist/colors.scss');
        var scss = fs.createWriteStream('dist/colors.scss', fileOptions);

        if (fs.existsSync('dist/colors.min.css')) fs.unlinkSync('dist/colors.min.css');
        var css = fs.createWriteStream('dist/colors.min.css', fileOptions);

        var template = fs.readFileSync('src/template.md', 'utf8');
        var readme = fs.createWriteStream('readme.md', { flags: 'w' });

        less.write(notice);
        scss.write(notice);
        css.write(notice);
        readme.write(template);

        for (key in colors) {
            var color = colors[key];
            less.write('@' + color['class'] + ': ' + color['color'] + ';' + endOfLine);
            scss.write('$' + color['class'] + ': ' + color['color'] + ';' + endOfLine);
            css.write('.gh-' + color['class'] + '{color:' + color['color'] + ';}');
            css.write('.gh-bg-' + color['class'] + '{background-color:' + color['color'] + ';}');
            readme.write('![' + key + '](http://www.placehold.it/150/' + color['color'].replace('#', '') + '/ffffff?text=' + key + ')' + endOfLine);
        }
        less.end();
        scss.end();
        css.end();
        readme.end();
    } catch (e) {
        console.log(e);
    }
});
