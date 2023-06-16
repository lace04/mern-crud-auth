import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';

//controllers
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controller.js';

//validators
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createSchema, updateSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.post('/tasks', validateSchema(createSchema), authRequired, createTask);
router.get('/tasks/:id', authRequired, getTask);
router.put(
  '/tasks/:id',
  validateSchema(updateSchema),
  authRequired,
  updateTask
);
router.delete('/tasks/:id', authRequired, deleteTask);

export default router;
