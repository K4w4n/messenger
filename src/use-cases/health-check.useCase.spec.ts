import "reflect-metadata";

import { describe, it, expect, vi } from "vitest";
import { HealthCheckUseCase } from "./health-check.useCase";
import knex from "knex";

describe('health check', () => {

    it('returns a success message', async () => {

        const knexMock: knex.Knex<any, unknown[]> = {
            raw: vi.fn().mockResolvedValue([])
        } as unknown as knex.Knex<any, unknown[]>;

        const useCase: HealthCheckUseCase = new HealthCheckUseCase(knexMock);

        await expect(useCase.execute()).resolves.toBeUndefined();
        expect(knexMock.raw).toBeCalledWith('SELECT 1 AS t');
    });

    it('throws a BadRequestError when it fails to connect to the database', async () => {
        const knexMock: knex.Knex<any, unknown[]> = {
            raw: vi.fn().mockRejectedValue(new Error('Failed to connect to database'))
        } as unknown as knex.Knex<any, unknown[]>;

        const useCase: HealthCheckUseCase = new HealthCheckUseCase(knexMock);

        await expect(useCase.execute()).rejects.toThrow('Failed to connect to database');
        expect(knexMock.raw).toBeCalledWith('SELECT 1 AS t');

    });

});