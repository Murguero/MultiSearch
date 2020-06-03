import { Router } from 'express';

import MaterialsController from '../controllers/MaterialsController';

const materialsRouter = Router();
const materialController = new MaterialsController();

materialsRouter.get('/', materialController.index);

export default materialsRouter;
