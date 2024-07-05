import amqp from "amqplib";
import { injectable } from "inversify";
import { RABBITMQ_URL } from "../config";

@injectable()
export class RabbitMQHealthCheckService {

    async execute(): Promise<void> {
        const connection = await amqp.connect(RABBITMQ_URL)
            .catch(() => {
                throw new Error('Failed to connect to RabbitMQ');
            });
        await connection.close();
    }
}