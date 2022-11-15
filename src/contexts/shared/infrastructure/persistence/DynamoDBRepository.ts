import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { AggregateRoot } from '../../domain';

export abstract class DynamoDBRepository<T extends AggregateRoot> {
    private _client: DynamoDBClient;

    constructor() {
        this._client = new DynamoDBClient({});
    }

    protected abstract tableName(): string;

    protected clientDocument(): DynamoDBDocument {
        return DynamoDBDocument.from(this._client);
    }

    protected async persist(aggregateRoot: T): Promise<void> {
        const putItemCommand: PutItemCommand = new PutItemCommand({
            TableName: this.tableName(),
            Item: aggregateRoot.toDDBItem(),
        });

        await this.clientDocument().send(putItemCommand);
    }
}