import { HttpError } from "./http-error";

export class NotFoundError extends HttpError {

    constructor(
        message: string = "Not Found",
        metadata?: any,
    ) {
        super(
            "NotFoundError",
            message,
            404,
            metadata,
        );
    }

}