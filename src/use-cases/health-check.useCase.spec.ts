import "reflect-metadata";

import { describe, it, expect, vi } from "vitest";
import { HealthCheckUseCase } from "./health-check.useCase";
import { DBHealthCheckService } from "../services/db.health-check.service";
import { RabbitMQHealthCheckService } from "../services/rabbitmq.health-check.service";
import { S3HealthCheckService } from "../services/s3.health-check.service";

describe('health check', () => {

    it('returns a success message', async () => {

        const { db, rabbitMQ, s3, useCase } = factoryData();

        await expect(useCase.execute()).resolves.toBeUndefined();

        expect(db.execute).toBeCalled();
        expect(rabbitMQ.execute).toBeCalled();
        expect(s3.execute).toBeCalled();
    });

    it('db throws an error', async () => {

        const { db, rabbitMQ, s3, useCase } = factoryData();
        db.execute = vi.fn(() => Promise.reject(new Error('Failed to connect to database')));

        await expect(useCase.execute()).rejects.toThrow(new Error('Failed to connect to database'));

        expect(db.execute).toBeCalled();
        expect(rabbitMQ.execute).not.toBeCalled();
        expect(s3.execute).not.toBeCalled();
    });

    it('rabbitMQ throws an error', async () => {

        const { db, rabbitMQ, s3, useCase } = factoryData();
        rabbitMQ.execute = vi.fn(() => Promise.reject(new Error('Failed to connect to rabbitMQ')));

        await expect(useCase.execute()).rejects.toThrow(new Error('Failed to connect to rabbitMQ'));

        expect(db.execute).toBeCalled();
        expect(rabbitMQ.execute).toBeCalled();
        expect(s3.execute).not.toBeCalled();
    });

    it('s3 throws an error', async () => {

        const { db, rabbitMQ, s3, useCase } = factoryData();
        s3.execute = vi.fn(() => Promise.reject(new Error('Failed to connect to s3')));

        await expect(useCase.execute()).rejects.toThrow(new Error('Failed to connect to s3'));

        expect(db.execute).toBeCalled();
        expect(rabbitMQ.execute).toBeCalled();
        expect(s3.execute).toBeCalled();
    });

});

function factoryData() {
    const db: DBHealthCheckService = { execute: vi.fn() } as unknown as DBHealthCheckService;
    const rabbitMQ: RabbitMQHealthCheckService = { execute: vi.fn() } as unknown as RabbitMQHealthCheckService;
    const s3: S3HealthCheckService = { execute: vi.fn() } as unknown as S3HealthCheckService;

    const useCase: HealthCheckUseCase = new HealthCheckUseCase(
        db,
        rabbitMQ,
        s3,
    );
    return { db, s3, useCase, rabbitMQ };
}