import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messageReceivers', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.specificType('messageId', 'CHAR(36)').notNullable();
        table.specificType('receiverId', 'CHAR(36)').notNullable();
        table.boolean('isDeleted').notNullable().defaultTo(false);

        table.timestamps(true, true, true);

        table.foreign('messageId')
            .references('messages.id');

        table.foreign('receiverId')
            .references('conversants.id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('messageReceivers');
}
