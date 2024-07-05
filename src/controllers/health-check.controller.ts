import { Request, Response } from "express";
import { HealthCheckUseCase } from "../use-cases/health-check.useCase";
import { BaseResponse } from "../responses/base.response";
import { inject, injectable } from "inversify";
import { CONTROLLER_IDENTIFIER, USE_CASE_IDENTIFIER } from "../constants/identifiers";

@injectable()
export class HealthCheckController {

    constructor(
        @inject(USE_CASE_IDENTIFIER.HEALTH_CHECK) private useCase: HealthCheckUseCase,
    ) { }

    public async healthCheck(
        _req: Request,
        res: Response,
    ): Promise<void> {

        await this.useCase.execute();

        res.status(200)
            .json(new BaseResponse(200, 'Health check passed'));
    }

}