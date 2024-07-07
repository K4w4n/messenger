import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('privateChats', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.specificType('chatId', 'CHAR(36)');
        table.specificType('senderId', 'CHAR(36)');
        table.specificType('receiverId', 'CHAR(36)');

        table.timestamps(true, true, true);

        table.foreign('chatId')
            .references('chats.id');

        table.foreign('senderId')
            .references('conversants.id');

        table.foreign('receiverId')
            .references('conversants.id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('privateChats');
}

