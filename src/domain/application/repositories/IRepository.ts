import { Result } from "neverthrow";

export interface IRepository<Entity, ErrorType, FindType> {
    create(entity: Entity): Promise<Result<Entity, ErrorType>>;
    update(entity: Entity): Promise<Result<Entity, ErrorType>>;
    delete(id: string): Promise<Result<void, ErrorType>>;
    find_by_id(id: string): Promise<Result<Entity | null, ErrorType>>;
    find(params: FindType): Promise<Result<Entity[], ErrorType>>;
}