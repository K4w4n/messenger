import { UUID } from "../types";
import { Entity } from "./entity";

export interface Message extends Entity {
    chatId: UUID;
    encryptedMessage?: string;
    senderId: UUID;
    isDeleted: boolean;
    fileExtension: string; 
    fileSrc?: string
};