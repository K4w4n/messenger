import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messages', (table) => {

        table.specificType('id', 'CHAR(36)').primary();
        table.specificType('tenantId', 'CHAR(36)').primary();

        table.specificType('chatId', 'CHAR(36)').notNullable();
        table.text('encryptedMessage').nullable();
        table.specificType('senderId', 'CHAR(36)').notNullable();
        table.boolean('isDeleted').notNullable().defaultTo(false);
        table.string('fileExtension').nullable();
        table.string('fileSrc').nullable();

        table.timestamps(true, true, true);

        table.foreign('chatId')
            .references('chats.id');

        table.foreign('senderId')
            .references('conversants.id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('messages');
}

