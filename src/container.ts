import "reflect-metadata";
import { Container } from "inversify";
import { CONTROLLER_IDENTIFIER, KNEX_IDENTIFIER, MODULE_IDENTIFIER, ROUTE_IDENTIFIER, S3_IDENTIFIER, SERVICES_IDENTIFIER, USE_CASE_IDENTIFIER } from "./constants/identifiers";
import { knex } from "./knex";
import { app } from "./app";
import { HealthCheckModule } from "./modules/health-check.module";
import { HealthCheckController } from "./controllers/health-check.controller";
import { HealthCheckUseCase } from "./use-cases/health-check.useCase";
import { DBHealthCheckService } from "./services/db.health-check.service";
import { RabbitMQHealthCheckService } from "./services/rabbitmq.health-check.service";
import { S3HealthCheckService } from "./services/s3.health-check.service";
import { s3 } from "./s3";

export const container = new Container();

container.bind(KNEX_IDENTIFIER).toConstantValue(knex);
container.bind(ROUTE_IDENTIFIER).toConstantValue(app);
container.bind(S3_IDENTIFIER).toConstantValue(s3);

container.bind<HealthCheckModule>(MODULE_IDENTIFIER.HEALTH_CHECK).to(HealthCheckModule);
container.bind<HealthCheckController>(CONTROLLER_IDENTIFIER.HEALTH_CHECK).to(HealthCheckController);
container.bind<HealthCheckUseCase>(USE_CASE_IDENTIFIER.HEALTH_CHECK).to(HealthCheckUseCase);

container.bind<DBHealthCheckService>(SERVICES_IDENTIFIER.DB_HEALTH_CHECK).to(DBHealthCheckService);
container.bind<RabbitMQHealthCheckService>(SERVICES_IDENTIFIER.RABBITMQ_HEALTH_CHECK).to(RabbitMQHealthCheckService);
container.bind<S3HealthCheckService>(SERVICES_IDENTIFIER.S3_HEALTH_CHECK).to(S3HealthCheckService);