import { Command } from "../../../../shared";

type Params = {
    id: string,
    title: string,
    description: string,
};

export class CreateTaskCommand extends Command {
    public id: string;
    public title: string;
    public description: string;

    constructor({ id, title, description }: Params) {
        super();

        this.id = id;
        this.title = title;
        this.description = description;
    }
}