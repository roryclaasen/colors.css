const namesMap = {
    'C++': 'cpp',
    'Objective-C++': 'Objective Cpp',
    'C#': 'C Sharp',
    'F#': 'F Sharp',
    'F*': 'F Star',
    'NetLinx+ERB': 'NetLinx ERB',
    'Ren\'Py': 'RenPy',
    '1C Enterprise': 'OneC Enterprise',
    'Visual Basic .NET': 'Visual Basic NET'
};

const classNames = namesMap as { [name: string]: string };
const keys = Object.keys(namesMap);

const getClassName = (key: string) => {
    const className = keys.includes(key) ? classNames[key] : key;
    return className.split(' ').join('');
};

export default namesMap;
export { classNames, keys, getClassName };
