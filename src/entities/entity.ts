import { UUID } from "../types";

export interface Entity {
    id: UUID;
    tenantId: UUID;
    createdAt: Date;
    updatedAt: Date;
}