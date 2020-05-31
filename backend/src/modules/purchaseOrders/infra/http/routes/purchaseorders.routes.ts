import { Router } from 'express';

import PurchaseOrdersController from '../controllers/PurchaseOrdersController';

const purchaseOrdersRouter = Router();
const purchaseOrdersController = new PurchaseOrdersController();

purchaseOrdersRouter.get('/:name', purchaseOrdersController.index);

export default purchaseOrdersRouter;
