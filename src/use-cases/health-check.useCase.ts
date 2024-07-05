import knex from "knex";

import { BaseUseCase } from "./base.useCase";
import { inject, injectable } from "inversify";
import { SERVICES_IDENTIFIER } from "../constants/identifiers";
import { DBHealthCheckService } from "../services/db.health-check.service";
import { RabbitMQHealthCheckService } from "../services/rabbitmq.health-check.service";
import { S3HealthCheckService } from "../services/s3.health-check.service";

@injectable()
export class HealthCheckUseCase extends BaseUseCase {

    constructor(
        @inject(SERVICES_IDENTIFIER.DB_HEALTH_CHECK) private db: DBHealthCheckService,
        @inject(SERVICES_IDENTIFIER.RABBITMQ_HEALTH_CHECK) private rabbitMQ: RabbitMQHealthCheckService,
        @inject(SERVICES_IDENTIFIER.S3_HEALTH_CHECK) private s3: S3HealthCheckService,
    ) {
        super();
    }

    async execute(): Promise<void> {
        await this.db.execute();
        await this.rabbitMQ.execute();
        await this.s3.execute();
    }
}