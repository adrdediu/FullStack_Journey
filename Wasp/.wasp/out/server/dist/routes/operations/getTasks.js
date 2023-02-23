import { handleRejection } from '../../utils.js';
import getTasks from "../../queries/getTasks.js";
export default handleRejection(async (req, res) => {
    const args = req.body || {};
    const context = {
        user: req.user
    };
    const result = await getTasks(args, context);
    res.json(result);
});
//# sourceMappingURL=getTasks.js.map