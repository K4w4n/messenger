import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/http-error";

export function errorHandlerMiddleware(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    if (error instanceof HttpError) {
        res.status(error.statusCode)
            .json(error);
    } else {
        res.status(500)
            .json(new HttpError(error.name, error.message, 500));
    }
}