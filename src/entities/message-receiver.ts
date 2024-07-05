import { UUID } from "../types";
import { Entity } from "./entity";

export interface MessageReceiver extends Entity {
    messageId: UUID;
    receiverId: UUID;
    isDeleted: boolean;
};