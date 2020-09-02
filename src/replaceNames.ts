import numberToWords from 'number-to-words';

const namesMap: Map<string, string> = new Map();

const getClassName = (name: string): string => {
    if (namesMap.has(name)) return namesMap.get(name);
    else {
        const basicClassName = generateBasicClassName(name);
        const className = generateClassName(name);

        if (className != basicClassName) namesMap.set(name, className);
        return className;
    }
};

const generateBasicClassName = (name: string): string => name.replace(/ /g, '').replace(/-/g, '');

const generateClassName = (name: string): string =>
    generateBasicClassName(name)
        .replace(/\d+/g, (match) => {
            const num = +match;
            if (isNaN(num)) return '';
            return numberToWords.toWords(num).replace(/^\w/, (c) => c.toUpperCase());
        })
        .replace(/[cC]\+\+/g, 'Cpp')
        .replace(/\+/g, '')
        .replace(/'/g, '')
        .replace(/\./g, '')
        .replace(/#/g, 'Sharp')
        .replace(/\*/g, 'Star');

export default namesMap;
export { getClassName };
