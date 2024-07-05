import knex from "knex";

import { BaseUseCase } from "./base.useCase";
import { BadRequestError } from "../errors/bad-request.error";
import { inject, injectable } from "inversify";
import { KNEX_IDENTIFIER } from "../constants/identifiers";

@injectable()
export class HealthCheckUseCase extends BaseUseCase {

    constructor(
        @inject(KNEX_IDENTIFIER) private knex: knex.Knex<any, unknown[]>,
    ) {
        super();
    }

    async execute(): Promise<void> {

        const query = 'SELECT 1 AS t';

        await this.knex.raw(query)
            .catch(this.errorHandler.bind(this));

    }

    private errorHandler() {
        throw new BadRequestError('Failed to connect to database');
    }

}