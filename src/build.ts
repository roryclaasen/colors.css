import fs from 'fs';
import path from 'path';

import FileSaver from './fileSaver';
import Linguist, { ILanguage, ILanguageMap } from './linguist';
import * as replaceNamesJson from './replace_names.json';
import StyleWriter, { IStyle } from './styleWriter';

const config = {
    languagesUrl: 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml',
    replaceNames: {
        names: replaceNamesJson as { [name: string]: string },
        keys: Object.keys(replaceNamesJson)
    }
};

type Language = {
    name: string
} & ILanguage;

const transformMapToList = (map: ILanguageMap) => {
    const list: Language[] = [];

    for (const name in map) {
        const lang = map[name];
        list.push({ name, ...lang });
    }

    return list;
};

const ensureHasColor = (list: Language[]) => list.filter(l => !!l.color);

const transformLangName = (name: string) => {
    const { names, keys } = config.replaceNames;

    const langName = keys.includes(name) ? names[name] : name;
    return langName.split(' ').join('');
};

const languageToStyle = (language: Language): IStyle => {
    const name = transformLangName(language.name);
    return {
        className: name,
        color: language.color
    };
};

const sortList = (list: Language[]) => list.sort((a, b) => a.name.localeCompare(b.name));

const getLanguages = (linguist: Linguist) => linguist.get()
    .then(transformMapToList)
    .then(ensureHasColor)
    .then(sortList);

const writeStyleWrtiers = (styleWriters: StyleWriter[], styles: IStyle[]) => styleWriters.forEach(writer => {
    writer.open({ flags: 'wx' });
    writer.writeLine(`/*
Copyright (c) 2016-2020 Rory Claasen
The MIT License (MIT)
*/`);
    styles.forEach(style => writer.writeStyle(style));
    writer.close();
});

getLanguages(new Linguist(config.languagesUrl)).then(languages => {
    const distFolder = path.resolve(__dirname, '..', 'dist');
    if (!fs.existsSync(distFolder)) {
        fs.mkdirSync(distFolder);
    }

    const styles = languages.map(languageToStyle);

    const styleWriters: StyleWriter[] = [];
    styleWriters.push(new StyleWriter(path.resolve(distFolder, 'colors.less'), (style: IStyle) => `@${style.className}:${style.color};`));
    styleWriters.push(new StyleWriter(path.resolve(distFolder, 'colors.scss'), (style: IStyle) => `$${style.className}:${style.color};`));
    styleWriters.push(new StyleWriter(path.resolve(distFolder, 'colors.min.css'), (style: IStyle) => `.gh-${style.className}{color:${style.color};}.gh-bg-${style.className}{background-color:${style.color};}`, false));

    writeStyleWrtiers(styleWriters, styles);
});
