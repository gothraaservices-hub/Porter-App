export class ApplicationError implements Error {
    public message: string;
    public name: string;

    public constructor(message = 'Default App Error') {
        this.name = 'Application Error'
        this.message = message
    }
}