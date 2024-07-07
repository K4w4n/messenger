import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('conversants', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.string('name').notNullable();
        table.string('imgSrc').nullable();

        table.timestamps(true, true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('conversants');
}

