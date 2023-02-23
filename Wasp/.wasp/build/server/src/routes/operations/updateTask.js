import { handleRejection } from '../../utils.js'

import updateTask from "../../actions/updateTask.js"


export default handleRejection(async (req, res) => {
  const args = req.body || {}

  const context = {
    user: req.user
  }
  const result = await updateTask(args, context)
  res.json(result)
})

