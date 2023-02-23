import prisma from '../dbClient.js'

import { updateTask } from '../ext-src/actions.js'


export default async (args, context) => {
  context = { ...context, entities: {
    Task: prisma.task,
  }}
  return updateTask(args, context)
}
