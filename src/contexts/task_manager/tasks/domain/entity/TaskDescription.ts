import { InvalidArgumentError, StringValueObject } from "../../../../shared";

export class TaskDescription extends StringValueObject {
    private readonly MAX_LENGTH: number = 500;

    constructor(value: string) {
        super(value);

        this.ensureLengthIsLessMaxCharacters(value);
    }

    private ensureLengthIsLessMaxCharacters(value: string): void {
        if (value.length > this.MAX_LENGTH) {
            throw new InvalidArgumentError(
                `The task description <${value}> has more than ${this.MAX_LENGTH} characters`
            );
        }
    }
}