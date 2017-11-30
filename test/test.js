const fs = require('fs');
var assert = require('assert');

var color = require('../index');

describe('Build', function () {
    it('should download languages.yml from github/linguist', function() {
        color.processColors(function (err, colors) {
            if (err) assert.fail(err);
            else assert.ok(true);
        });
    });
    describe('Creates distribution files', function () {
        it('should return true if \'colors.less\' is present', function () {
            if (fs.existsSync('dist/colors.less')) assert.ok(true, 'File exists');
            else assert.fail('File does not exist');
        });
        it('should return true if \'colors.min.css\' is present', function () {
            if (fs.existsSync('dist/colors.min.css')) assert.ok(true, 'File exists');
            else assert.fail('File does not exist');
        });
        it('should return true if \'colors.scss\' is present', function () {
            if (fs.existsSync('dist/colors.scss')) assert.ok(true, 'File exists');
            else assert.fail('File does not exist');
        });
    });
});