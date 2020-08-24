const namesMap: Map<string, string> = new Map([
    ['C++', 'cpp'],
    ['Objective-C++', 'ObjectiveCpp'],
    ['C#', 'CSharp'],
    ['F#', 'FSharp'],
    ['F*', 'FStar'],
    ['NetLinx+ERB', 'NetLinxERB'],
    [`Ren'Py`, 'RenPy'],
    ['1C Enterprise', 'OneCEnterprise'],
    ['Visual Basic .NET', 'VisualBasic NET']
]);

function getClassName(key: string): string {
    const className = namesMap.has(key) ? namesMap.get(key) : key;
    return className.split(' ').join('');
}

export default namesMap;
export { getClassName };
