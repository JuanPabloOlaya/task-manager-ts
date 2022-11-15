import { Command, CommandBus } from "../../domain/command";
import { CommandHandlersInformation } from "./CommandHandlersInformation";

export class InMemoryCommandBus implements CommandBus {
    private _commandHandlersInformation: CommandHandlersInformation;

    constructor(commandHandlersInformation: CommandHandlersInformation) {
        this._commandHandlersInformation = commandHandlersInformation;
    }

    async dispatch(command: Command): Promise<void> {
        const handler = this._commandHandlersInformation.search(command);

        await handler.handle(command);
    }
}