import fs, { PathLike, WriteStream } from 'fs';
import { EOL } from 'os';

type StreamOptions =
    | string
    | {
          flags?: string;
          encoding?: BufferEncoding;
          fd?: number;
          mode?: number;
          autoClose?: boolean;
          emitClose?: boolean;
          start?: number;
          highWaterMark?: number;
      };

type Chunk = unknown;

export default class FileSaver {
    private path: PathLike;

    private stream: WriteStream;

    constructor(path: PathLike) {
        this.path = path;
    }

    private createStream = (path: PathLike, options?: StreamOptions) => fs.createWriteStream(path, options);

    public write(chunk: Chunk): void {
        if (this.stream === undefined) throw new Error('Stream is not open');
        this.stream.write(chunk);
    }

    public writeLine(chunk: Chunk): void {
        this.write(chunk);
        this.write(EOL);
    }

    public open(options?: StreamOptions, unlink?: boolean): void {
        if (this.stream !== undefined) throw new Error('Stream is already open');
        if (unlink === true) {
            if (fs.existsSync(this.path)) fs.unlinkSync(this.path);
        }
        this.stream = this.createStream(this.path, options);
    }

    public close(): void {
        if (this.stream !== undefined) {
            this.stream.end();
        }
    }

    public get filePath(): PathLike {
        return this.path;
    }
}
