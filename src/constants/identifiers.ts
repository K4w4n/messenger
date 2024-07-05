export const SERVICES_IDENTIFIER = {
    DB_HEALTH_CHECK: Symbol('DBHealthCheckService'),
    RABBITMQ_HEALTH_CHECK: Symbol('RabbitMQHealthCheckService'),
    S3_HEALTH_CHECK: Symbol('S3HealthCheckService'),
};

export const USE_CASE_IDENTIFIER = {
    HEALTH_CHECK: Symbol('HealthCheckUseCase'),
};

export const CONTROLLER_IDENTIFIER = {
    HEALTH_CHECK: Symbol('HealthCheckController'),
};

export const MODULE_IDENTIFIER = {
    HEALTH_CHECK: Symbol('HealthCheckModule'),
};

export const KNEX_IDENTIFIER = Symbol('Knex');

export const ROUTE_IDENTIFIER = Symbol('router');

export const S3_IDENTIFIER = Symbol('s3');