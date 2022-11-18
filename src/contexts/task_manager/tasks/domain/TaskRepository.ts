import { Task } from "./entity";

export interface TaskRepository {
    save(task: Task): Promise<void>;
}