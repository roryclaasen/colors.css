import bent from 'bent';
import yaml from 'js-yaml';

const requestBent = bent('string');

export interface ILanguage {
    type: 'data' | 'programming' | 'markup' | 'prose' | 'nil';
    color?: string;
    aliases?: string[];
    extensions: string[];
    language_id: number;
}

export interface ILanguageMap {
    [id: string]: ILanguage;
}

export default class Linguist {
    private languagesUrl: string;

    constructor(languagesUrl: string) {
        this.languagesUrl = languagesUrl;
    }

    public get(): Promise<ILanguageMap> {
        return this.fetch().then(this.transform);
    }

    private fetch(): Promise<string> {
        return requestBent(this.languagesUrl);
    }

    private transform(value: string): ILanguageMap {
        return yaml.safeLoad(value) as ILanguageMap;
    }
}
