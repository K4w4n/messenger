import { HttpError } from "./http-error";

export class BadRequestError extends HttpError {

    constructor(
        message: string,
        metadata?: any,
    ) {
        super(
            "BadRequestError",
            message,
            400,
            metadata,
        );
    }

}