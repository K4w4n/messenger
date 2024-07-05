import { describe, expect, it, vi } from "vitest";
import { errorHandlerMiddleware } from "./error-handler.middleware";
import { HttpError } from "../errors/http-error";
import { Request, Response } from "express";
import { NotFoundError } from "../errors/not-found.error";

describe("ErrorHandler middleware", () => {

    it("handles HttpError", () => {
        const error = new NotFoundError();
        const res: Response = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;

        errorHandlerMiddleware(
            error,
            {} as Request,
            res,
            () => { },
        );

        expect(res.status).toBeCalledWith(404);
        expect(res.json)
            .toBeCalledWith(new HttpError(
                'NotFoundError',
                'Not Found',
                404,// TODO: o status code não esta sendo validado
            ));
    });

    it("handles non-HttpError", () => {
        const error = new Error();
        error.name = "Unexpected Error";
        error.message = "This was a simulated error";
        const res: Response = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;

        errorHandlerMiddleware(
            error,
            {} as Request,
            res,
            () => { },
        );

        expect(res.status).toBeCalledWith(500);
        expect(res.json)
            .toBeCalledWith(new HttpError(
                "Unexpected Error",
                "This was a simulated error",
                500,// TODO: o status code não esta sendo validado
            ));
    });
});