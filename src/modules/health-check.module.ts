import { Router } from "express";
import { BaseModule } from "./base.module";
import { wrap } from "async-middleware";
import { HealthCheckController } from "../controllers/health-check.controller";
import { inject, injectable } from "inversify";
import { CONTROLLER_IDENTIFIER, ROUTE_IDENTIFIER } from "../constants/identifiers";

@injectable()
export class HealthCheckModule extends BaseModule {

    constructor(
        @inject(CONTROLLER_IDENTIFIER.HEALTH_CHECK) private healthCheckController: HealthCheckController,
        @inject(ROUTE_IDENTIFIER) private router: Router,
    ) {
        super();
    }

    registerRoutes(): void {
        this.router.get(
            '/health-check',
            wrap(this.healthCheckController.healthCheck.bind(this.healthCheckController)),
        );
    }

}