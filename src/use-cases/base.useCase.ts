import { injectable } from "inversify";

@injectable()
export abstract class BaseUseCase {

    abstract execute(...params: any[]): Promise<any>;

}