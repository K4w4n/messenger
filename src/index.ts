import { app } from "./app";
import { appPort } from "./config";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { container } from "./container";
import { MODULE_IDENTIFIER } from "./constants/identifiers";
import { BaseModule } from "./modules/base.module";

async function bootstrap() {

    for (const identifier of Object.values(MODULE_IDENTIFIER)) {
        const module = container.get<BaseModule>(identifier);
        module.registerRoutes();
    }

    app.use(notFoundMiddleware, errorHandlerMiddleware);

    app.listen(appPort, () => {
        console.log(`Server running on port ${appPort}`);
    });

}

bootstrap();