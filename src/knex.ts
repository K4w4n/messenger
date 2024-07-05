import knexConfig from "../knexfile";
import knexConstructor from "knex";

export const knex: knexConstructor.Knex<any, unknown[]> = knexConstructor(knexConfig);