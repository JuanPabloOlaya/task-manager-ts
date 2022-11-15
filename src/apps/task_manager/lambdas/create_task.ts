import { Handler } from "aws-lambda";
import httpStatus from "http-status";

export const createTask: Handler = async (event: unknown): Promise<unknown> => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

    return {
        statusCode: httpStatus.OK,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: "task created",
            data: event,
        })
    };
};