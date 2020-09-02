import { assert } from 'chai';
import fs from 'fs';
import less from 'less';
import sass from 'node-sass';
import path from 'path';

describe('build', () => {
    describe('outputs', () => {
        const outputFolder = path.join(__dirname, '..', 'dist');

        describe('scss', () => {
            const file = path.join(outputFolder, 'colors.scss');

            let fileExists = false;

            before(async () => {
                fileExists = await new Promise((resolve) => fs.exists(file, (exists) => resolve(exists)));
            });

            it('should return true if file present', () => {
                if (fileExists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });

            it('should render correctly', (done) => {
                sass.render({ file }, (err) => {
                    if (err) done(err);
                    else done();
                });
            });
        });

        describe('less', () => {
            const file = path.join(outputFolder, 'colors.less');

            let fileExists = false;

            before(async () => {
                fileExists = await new Promise((resolve) => fs.exists(file, (exists) => resolve(exists)));
            });

            it('should return true if file present', () => {
                if (fileExists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });

            it('should render correctly', (done) => {
                fs.readFile(file, (err, data) => {
                    if (err) done(err);
                    else {
                        less.render(data.toString())
                            .then(() => done())
                            .catch((err) => done(err));
                    }
                });
            });
        });

        describe('css', () => {
            const file = path.join(outputFolder, 'colors.min.css');

            let fileExists = false;

            before(async () => {
                fileExists = await new Promise((resolve) => fs.exists(file, (exists) => resolve(exists)));
            });

            it('should return true if file present', () => {
                if (fileExists) assert.ok(true, 'File exists');
                else assert.fail('File does not exist');
            });
        });
    });
});
