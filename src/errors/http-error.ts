export class HttpError extends Error {

    public statusCode: number;
    public metadata?: any;

    constructor(
        name: string,
        message: string,
        statusCode: number,
        metadata?: any,
    ) {
        super();
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
        this.metadata = metadata;
    }

}