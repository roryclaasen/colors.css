/*
* Copyright (c) 2016-2018 Rory Claasen
* The MIT License (MIT)
*/
const fs = require('fs'), assert = require('assert'), sass = require('node-sass');

var color = require('../index');

describe('Build', function () {
    it('should download languages.yml from github/linguist', function () {
        color.processColors(function (err, colors) {
            if (err) assert.fail(err);
            else assert.ok(true);
        });
    });
    describe('Distribution files', function () {
        describe('colors.less', function () {
            var exists = fs.existsSync('dist/colors.less');
            it('should return true if \'colors.less\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
        });
        describe('colors.min.css', function () {
            var exists = fs.existsSync('dist/colors.min.css');
            it('should return true if \'colors.min.css\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
        });
        describe('Scss', function () {
            var exists = fs.existsSync('dist/colors.scss');
            it('should return true if \'colors.scss\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
            if (exists) it('should return true if rendered correctly', function () {
                sass.renderSync({
                    file: 'dist/colors.scss'
                }, function (err, result) {
                    if (err) assert.fail(err.message);
                    else assert.ok(true, 'Rendered correctly');
                });
            });
        });
    });
});