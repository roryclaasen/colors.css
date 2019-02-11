/*
* Copyright (c) 2016-2019 Rory Claasen
* The MIT License (MIT)
*/
const fs = require('fs'), assert = require('assert'), sass = require('node-sass'), less = require('less');

const color = require('../index');

const path = require('path');
const paths = {
	css: path.join(__dirname, '..', 'dist', 'colors.min.css'),
	less: path.join(__dirname, '..', 'dist', 'colors.less'),
	scss: path.join(__dirname, '..', 'dist', 'colors.scss')
}

describe('Build', function () {
    it('should download languages.yml from github/linguist', function () {
        color.processColors(function (err, colors) {
            if (err) assert.fail(err);
            else assert.ok(true);
        });
    });
    describe('Distribution files', function () {
        describe('Less', function () {
            const exists = fs.existsSync(paths.less);
            it('should return true if \'colors.less\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
			});
			it('should return true if rendered correctly', function () {
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
        describe('Css', function () {
            const exists = fs.existsSync(paths.css);
            it('should return true if \'colors.min.css\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
        });
        describe('Scss', function () {
            const exists = fs.existsSync(paths.scss);
            it('should return true if \'colors.scss\' is present', function () {
                if (exists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
            it('should return true if rendered correctly', function () {
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