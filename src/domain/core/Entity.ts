
interface IEntityProps {
    id?: string;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export abstract class Entity {
    public readonly id?: string;
    public status: boolean;
    public createdAt: string;
    public updatedAt: string;
    public deletedAt: string;

    protected constructor(props: IEntityProps) {
        this.id = props.id;
        this.status = props.status;
        this.createdAt = props.createdAt ?? '';
        this.updatedAt = props.updatedAt ?? '';
        this.deletedAt = props.deletedAt ?? '';
    }
}