import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('chats', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.enum('type', ['private', 'group']).notNullable();
        table.specificType('lastMessageId', 'CHAR(36)').nullable();

        table.timestamps(true, true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('chats');
}

