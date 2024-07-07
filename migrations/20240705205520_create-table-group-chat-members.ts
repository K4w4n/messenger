import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('groupChatMembers', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.specificType('memberId', 'CHAR(36)').notNullable();
        table.specificType('groupChatId', 'CHAR(36)').notNullable();
        table.boolean('isRemoved').defaultTo(false).notNullable();
        table.boolean('isDeleted').defaultTo(false).notNullable();

        table.timestamps(true, true, true);

        table.foreign('memberId')
            .references('conversants.id');

        table.foreign('groupChatId')
            .references('groupChats.id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('groupChatMembers');
}

