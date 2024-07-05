import "reflect-metadata";
import { Container } from "inversify";
import { CONTROLLER_IDENTIFIER, KNEX_IDENTIFIER, MODULE_IDENTIFIER, ROUTE_IDENTIFIER, USE_CASE_IDENTIFIER } from "./constants/identifiers";
import { knex } from "./knex";
import { app } from "./app";
import { HealthCheckModule } from "./modules/health-check.module";
import { HealthCheckController } from "./controllers/health-check.controller";
import { HealthCheckUseCase } from "./use-cases/health-check.useCase";

export const container = new Container();

container.bind(KNEX_IDENTIFIER).toConstantValue(knex);
container.bind(ROUTE_IDENTIFIER).toConstantValue(app);

container.bind<HealthCheckModule>(MODULE_IDENTIFIER.HEALTH_CHECK).to(HealthCheckModule);
container.bind<HealthCheckController>(CONTROLLER_IDENTIFIER.HEALTH_CHECK).to(HealthCheckController);
container.bind<HealthCheckUseCase>(USE_CASE_IDENTIFIER.HEALTH_CHECK).to(HealthCheckUseCase);
