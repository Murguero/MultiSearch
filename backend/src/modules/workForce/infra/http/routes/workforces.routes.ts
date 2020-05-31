import { Router } from 'express';

import WorkForcesController from '../controllers/WorkForcesController';

const workForcesRouter = Router();
const workForcesController = new WorkForcesController();

workForcesRouter.get('/:name', workForcesController.index);

export default workForcesRouter;
