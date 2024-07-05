import { UUID } from "../types";
import { Entity } from "./entity";

export interface Chat extends Entity {
    type: "private" | "group";
    lastMessageId: UUID;
}