import { Task, TaskDescription, TaskId, TaskRepository, TaskTitle } from "../../domain"

type Params = {
    taskId: TaskId,
    taskTitle: TaskTitle,
    taskDescription: TaskDescription,
};

export class TaskCreator {
    private _repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this._repository = repository;
    }

    async run({
        taskId,
        taskTitle,
        taskDescription,
    }: Params): Promise<void> {
        const task: Task = Task.create({
            id: taskId,
            title: taskTitle,
            description: taskDescription
        });

        await this._repository.save(task);
    }
}