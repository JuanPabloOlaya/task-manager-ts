import { InvalidArgumentError, StringValueObject } from "../../../../shared";

export class TaskTitle extends StringValueObject {
    constructor(value: string) {
        super(value);

        this.ensureLengthIsLessThan101Characters(value);
    }

    private ensureLengthIsLessThan101Characters(value: string): void {
        if (value.length > 100) {
            throw new InvalidArgumentError(`The task title <${value}> has more than 100 characters`);
        }
    }
}