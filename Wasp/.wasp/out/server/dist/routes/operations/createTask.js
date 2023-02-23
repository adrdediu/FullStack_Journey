import { handleRejection } from '../../utils.js';
import createTask from "../../actions/createTask.js";
export default handleRejection(async (req, res) => {
    const args = req.body || {};
    const context = {
        user: req.user
    };
    const result = await createTask(args, context);
    res.json(result);
});
//# sourceMappingURL=createTask.js.map