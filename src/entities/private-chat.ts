import { UUID } from "../types";
import { Entity } from "./entity";

export interface PrivateChat extends Entity {
    chatId: UUID;
    senderId: UUID;
    receiverId: UUID;
};