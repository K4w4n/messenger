import { Entity } from "./entity";

export interface GroupChat extends Entity {
    chatId: string;
    name: string;
    description: string;
    imgSrc: string;
    isDeleted: boolean;
};