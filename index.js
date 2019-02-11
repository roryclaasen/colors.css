/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/
const yaml = require('js-yaml'), download = require('download-file'), fs = require('fs');

const const_replace_names = {
    'C++': 'cpp',
    'Objective-C++': 'Objective-Cpp',
    'C#': 'C Sharp',
	'F#': 'F Sharp',
	'F*': 'F Star',
    'NetLinx+ERB': 'NetLinx-ERB',
    'Ren\'Py': 'RenPy',
    '1C Enterprise': 'OneC-Enterprise'
};

exports.replace_names = const_replace_names;

exports.copyright = `/*
Copyright (c) 2016-2019 Rory Claasen
The MIT License (MIT)
*/
`;

exports.processColors = function(callback) {
    const filename = 'languages.yml';
    download('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml', function(err) {
        if (err) callback(err);
        else {
            try {
                const doc = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
                fs.unlinkSync(filename);

                const colors = {};
                for (const key in doc) {
                    const obj = doc[key];
                    if ('color' in obj) {
                        const keyClass = (key in const_replace_names) ? const_replace_names[key] : key;
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
