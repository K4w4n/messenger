import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('chats', (table) => {

        table.foreign('lastMessageId')
            .references('messages.id');

    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('chats', (table) => {
        table.dropForeign(['lastMessageId']);
    });
}

