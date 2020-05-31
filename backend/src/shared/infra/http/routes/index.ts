import { Router } from 'express';
import equipmentsRouter from '@modules/equipments/infra/http/routes/equipments.routes';
import materialsRouter from '@modules/materials/infra/http/routes/materials.routes';
import purchaseOrdersRouter from '@modules/purchaseOrders/infra/http/routes/purchaseorders.routes';
import workForcesRouter from '@modules/workForce/infra/http/routes/workforces.routes';

const router = Router();

router.use('/equipments', equipmentsRouter);
router.use('/materials', materialsRouter);
router.use('/purchase-orders', purchaseOrdersRouter);
router.use('/work-force', workForcesRouter);

export default router;
