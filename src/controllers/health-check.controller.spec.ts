import "reflect-metadata";

import { vi, describe, expect, it } from "vitest";
import { HealthCheckController } from "./health-check.controller";
import { HealthCheckUseCase } from "../use-cases/health-check.useCase";
import { Request, Response } from "express";
import { BaseResponse } from "../responses/base.response";

describe("health check controller", () => {
    it("returns a success message", async () => {

        const useCaseMock: HealthCheckUseCase = {
            execute: vi.fn().mockResolvedValue(null),
        } as unknown as HealthCheckUseCase;

        const res: Response = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;

        const controller = new HealthCheckController(useCaseMock);

        await controller.healthCheck(
            null as unknown as Request,
            res as unknown as Response,
        );

        expect(useCaseMock.execute).toBeCalledTimes(1);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith(new BaseResponse(200, 'Health check passed'));

    });
});