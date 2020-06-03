import { Router } from 'express';

import EquipmentsController from '../controllers/EquipmentsController';

const equipmentsRouter = Router();
const equipmentController = new EquipmentsController();

equipmentsRouter.get('/', equipmentController.index);

export default equipmentsRouter;
