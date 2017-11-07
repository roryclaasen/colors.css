/*
* Copyright (c) 2016-2017 Rory Claasen
* The MIT License (MIT)
*/
const yaml = require('js-yaml'), download = require('download-file'), fs = require('fs');

var replace_names = {
    'C++': 'cpp',
    'Objective-C++': 'Objective-Cpp',
    'C#': 'C Sharp',
    'F#': 'F Sharp',
    'NetLinx+ERB': 'NetLinx-ERB',
    'Ren\'Py': 'RenPy'
};

exports.copyright = `/*
Copyright (c) 2016-2017 Rory Claasen
The MIT License (MIT)
*/
`;

exports.processColors = function(callback) {
    var filename = 'languages.yml';
    download('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml', function(err) {
        if (err) callback(err);
        else {
            try {
                var doc = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
                fs.unlinkSync(filename);

                var colors = {};
                for (var key in doc) {
                    var obj = doc[key];
                    if ('color' in obj) {
                        var keyClass = key;
                        if (keyClass in replace_names) keyClass = replace_names[key];
                        colors[key] = {
                            'color': obj.color,
                            'class': keyClass.split(' ').join('-')
                        };
                    }
                }
                callback(undefined, colors);
            } catch(err) {
                callback(err);
            }
        }
    });
};
