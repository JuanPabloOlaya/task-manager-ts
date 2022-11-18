import { DynamoDBRepository } from "../../../../shared";
import { Task, TaskRepository } from "../../domain";

export class DynamoDBTaskRepository extends DynamoDBRepository<Task> implements TaskRepository {
    public async save(task: Task): Promise<void> {
        return this.persist(task);
    }

    protected tableName(): string {
        return `${process.env.TASK_TABLE_NAME}`;
    }
}