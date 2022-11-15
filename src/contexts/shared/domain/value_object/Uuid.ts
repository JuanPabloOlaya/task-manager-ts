import validate from "uuid-validate";
import { InvalidArgumentError } from "./InvalidArgumentError";

export class Uuid {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValidUuid(value);

        this.value = value;
    }

    private ensureIsValidUuid(value: string): void {
        if (!validate(value)) {
            throw new InvalidArgumentError(
                `<${this.constructor.name}> does not allow the value <${value}>`
            );
        }
    }

    toString(): string {
        return this.value;
    }
}