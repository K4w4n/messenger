import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('groupChats', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.specificType('chatId', 'CHAR(36)').notNullable();
        table.string('name').notNullable();
        table.string('description').nullable();
        table.string('imgSrc').nullable();
        table.boolean('isDeleted').notNullable().defaultTo(false);

        table.timestamps(true, true, true);

        table.foreign('chatId')
            .references('chats.id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('groupChats');
}

