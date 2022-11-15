import { AggregateRoot } from "../../../shared";
import { TaskId } from "./TaskId";
import { TaskTitle } from "./TaskTitle";
import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { TaskDescription } from "./TaskDescription";

export class Task extends AggregateRoot {
    readonly id: TaskId;
    readonly title: TaskTitle;
    readonly description: TaskDescription;

    constructor(id: TaskId, title: TaskTitle, description: TaskDescription) {
        super();

        this.id = id;
        this.title = title;
        this.description = description;
    }

    toDDBItem(): { [key: string]: AttributeValue } {
        return {
            id: { S: this.id.value },
            title: { S: this.title.value },
            description: { S: this.description.value },
        };
    }

    toPrimitives(): { [key: string]: unknown } {
        return {
            id: this.id.value,
            title: this.title.value,
            description: this.description.value,
        };
    }
}