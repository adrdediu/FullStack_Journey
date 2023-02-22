import express from 'express';
import auth from '../../core/auth.js';
import createTask from './createTask.js';
import updateTask from './updateTask.js';
import getTasks from './getTasks.js';
const router = express.Router();
router.post('/create-task', auth, createTask);
router.post('/update-task', auth, updateTask);
router.post('/get-tasks', auth, getTasks);
export default router;
//# sourceMappingURL=index.js.map