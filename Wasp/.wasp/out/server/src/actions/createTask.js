import prisma from '../dbClient.js'

import { createTask } from '../ext-src/actions.js'


export default async (args, context) => {
  context = { ...context, entities: {
    Task: prisma.task,
  }}
  return createTask(args, context)
}
