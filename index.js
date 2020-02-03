/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/
const yaml = require('js-yaml');
const request = require('request-promise');

exports.replace_names = {
    'C++': 'cpp',
    'Objective-C++': 'Objective-Cpp',
    'C#': 'C Sharp',
    'F#': 'F Sharp',
    'F*': 'F Star',
    'NetLinx+ERB': 'NetLinx-ERB',
    'Ren\'Py': 'RenPy',
    '1C Enterprise': 'OneC-Enterprise',
    'Visual Basic .NET': 'Visual Basic NET'
};

function convertYaml(data) {
    const colors = {};
    for (const key in data) {
        const obj = data[key];
        if ('color' in obj) {
            const keyClass = (key in exports.replace_names) ? exports.replace_names[key] : key;
            colors[key] = {
                'color': obj.color,
                'class': keyClass.split(' ').join('-')
            };
        }
    }
    return colors;
}

exports.processColors = request('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
    .then(data => {
        const doc = yaml.safeLoad(data);
        return convertYaml(doc);
    });
