export class TaskNotExists extends Error {
    constructor(id: string) {
        super(`The task with ID <${id}> does not exists`);
    }
}