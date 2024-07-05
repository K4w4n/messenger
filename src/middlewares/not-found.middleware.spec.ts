import { describe, it, expect, vi } from "vitest";
import { notFoundMiddleware } from "./not-found.middleware";
import { Request, Response } from "express";
import { NotFoundError } from "../errors/not-found.error";

describe("not found middleware", () => {
    it("throws NotFoundError", () => {
        const next = vi.fn();

        notFoundMiddleware(
            null as unknown as Request,
            null as unknown as Response,
            next,
        );

        expect(next).toBeCalledWith(new NotFoundError("Route not found"));
    });
});