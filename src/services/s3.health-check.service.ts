import { inject, injectable } from "inversify";
import AWS from "aws-sdk";
import { S3_IDENTIFIER } from "../constants/identifiers";

@injectable()
export class S3HealthCheckService {

    constructor(
        @inject(S3_IDENTIFIER) private s3: AWS.S3,
    ) { }

    async execute() {
        await this.s3.listBuckets().promise()
            .catch(() => {
                throw new Error('Failed to connect S3');
            });
    }
}