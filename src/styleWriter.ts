import { PathLike } from 'fs';

import FileSaver from './fileSaver';

export interface IStyle {
    name: string;
    className: string;
    color: string;
}

export type StyleFormat = (style: IStyle) => string;

export default class StyleWriter extends FileSaver {
    private format: StyleFormat;
    private newLine: boolean;

    constructor(path: PathLike, format: StyleFormat, newLine = true) {
        super(path);

        this.format = format;
        this.newLine = newLine;
    }

    public writeStyle(style: IStyle): void {
        const line = this.format(style);

        if (this.newLine) this.writeLine(line);
        else this.write(line);
    }
}
