import { UUID } from "../types";
import { Entity } from "./entity";

export interface GroupChatMember extends Entity {
    memberId: UUID;
    groupChatId: UUID;
    isRemoved: boolean;
    isDeleted: boolean;
};