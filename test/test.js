/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/
const fs = require('fs');
const assert = require('assert');
const sass = require('node-sass');
const less = require('less');
const path = require('path');

const color = require('../index');

const paths = {
    css: path.join(__dirname, '..', 'dist', 'colors.min.css'),
    less: path.join(__dirname, '..', 'dist', 'colors.less'),
    scss: path.join(__dirname, '..', 'dist', 'colors.scss')
}

describe('Build', () => {
    it('should download languages.yml from github/linguist', () => {
        color.processColors.then(() => assert.ok(true)).catch(err => assert.fail(err));
    });

    describe('Distribution files', () => {
        describe('Less', () => {
            const exists = fs.existsSync(paths.less);

            it('should return true if \'colors.less\' is present', () => {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });

            it('should return true if rendered correctly', () => {
                if (!exists) {
                    assert.fail('File does not exist');
                } else {
                    const lessFile = fs.readFileSync(paths.less).toString();
                    less.render(lessFile, {}, (error, output) => {
                        console.log(error);
                        if (error) assert.fail(error.message);
                        else assert.ok(true, 'Rendered correctly');
                    });
                }
            });
        });

        describe('Css', () => {
            const exists = fs.existsSync(paths.css);

            it('should return true if \'colors.min.css\' is present', () => {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
        });

        describe('Scss', () => {
            const exists = fs.existsSync(paths.scss);

            it('should return true if \'colors.scss\' is present', () => {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });

            it('should return true if rendered correctly', () => {
                if (!exists) {
                    assert.fail('File does not exist');
                } else sass.renderSync({
                    file: paths.scss
                }, (err, result) => {
                    if (err) assert.fail(err.message);
                    else assert.ok(true, 'Rendered correctly');
                });
            });
        });
    });
});
