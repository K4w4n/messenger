import { inject, injectable } from "inversify";
import { KNEX_IDENTIFIER } from "../constants/identifiers";
import knex from "knex";

@injectable()
export class DBHealthCheckService {

    constructor(
        @inject(KNEX_IDENTIFIER) private knex: knex.Knex<any, unknown[]>,
    ) { }

    public async execute(): Promise<void> {
        await this.knex.raw('SELECT 1 AS t')
            .catch(() => {
                throw new Error('Failed to connect to database');
            });
    }

}