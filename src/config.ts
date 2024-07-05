import "dotenv/config";

export const appPort: number = Number(process.env.APP_PORT);

export const dbConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

export const RABBITMQ_URL = process.env.RABBITMQ_URL as string;

export const s3Config: AWS.S3.ClientConfiguration = {
    endpoint: process.env.S3_ENDPOINT,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    s3ForcePathStyle: process.env.S3_FORCE_PATH_STYLE === 'true',
}

// TODO: Validar variáveis de ambiente