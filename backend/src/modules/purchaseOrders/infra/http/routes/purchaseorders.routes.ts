import { Router } from 'express';

import PurchaseOrdersController from '../controllers/PurchaseOrdersController';

const purchaseOrdersRouter = Router();
const purchaseOrdersController = new PurchaseOrdersController();

purchaseOrdersRouter.get('/', purchaseOrdersController.index);

export default purchaseOrdersRouter;
