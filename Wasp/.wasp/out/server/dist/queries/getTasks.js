import prisma from '../dbClient.js';
import { getTasks } from './../ext-src/queries.js';
export default async (args, context) => {
    context = { ...context, entities: {
            Task: prisma.task,
        } };
    return getTasks(args, context);
};
//# sourceMappingURL=getTasks.js.map