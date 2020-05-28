import fs, { PathLike, WriteStream } from 'fs';
import { EOL } from 'os';

type StreamOptions = string | {
    flags?: string;
    encoding?: BufferEncoding;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    emitClose?: boolean;
    start?: number;
    highWaterMark?: number;
}

export default class FileSaver {
    private path: PathLike;

    private stream: WriteStream;

    constructor(path: PathLike) {
        this.path = path;
    }

    private createStream = (path: PathLike, options?: StreamOptions) => {
        if (fs.existsSync(path)) fs.unlinkSync(path);
        return fs.createWriteStream(path, options);
    }

    public write = (chunk: any) => {
        if (this.stream === undefined) throw new Error('Stream is not open');
        this.stream.write(chunk);
    }

    public writeLine = (chunk: any) => {
        this.write(chunk);
        this.write(EOL);
    }

    public open(options?: StreamOptions) {
        if (this.stream !== undefined) throw new Error('Stream is already open');
        this.stream = this.createStream(this.path, options);
    }

    public close = () => {
        if (this.stream !== undefined) {
            this.stream.end();
        }
    }

    public get filePath() {
        return this.path;
    }
}
