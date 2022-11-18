import { Command, CommandHandler } from "../../../../shared";
import { TaskDescription, TaskId, TaskTitle } from "../../domain";
import { CreateTaskCommand } from "./CreateTaskCommand";
import { TaskCreator } from "./TaskCreator";

export class CreateTaskCommandHandler implements CommandHandler<CreateTaskCommand> {
    private _taskCreator: TaskCreator;

    constructor(taskCreator: TaskCreator) {
        this._taskCreator = taskCreator;
    }

    public subscribedTo(): Command {
        return CreateTaskCommand;
    }

    public async handle(command: CreateTaskCommand): Promise<void> {
        const id: TaskId = new TaskId(command.id);
        const title: TaskTitle = new TaskTitle(command.title);
        const description: TaskDescription = new TaskDescription(command.description);

        await this._taskCreator.run({
            taskId: id,
            taskDescription: description,
            taskTitle: title,
        });
    }
}