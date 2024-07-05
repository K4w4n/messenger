import { injectable } from "inversify";

@injectable()
export abstract class BaseModule {

    abstract registerRoutes(): void;

}