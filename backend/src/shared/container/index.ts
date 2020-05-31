import { container } from 'tsyringe';

import IEquipmentsRepository from '@modules/equipments/repositories/IEquipmentsRepository';
import EquipmentsRepository from '@modules/equipments/infra/json/repositories/EquipmentsRepository';

import IMaterialsRepository from '@modules/materials/repositories/IMaterialsRepository';
import MaterialsRepository from '@modules/materials/infra/json/repositories/MaterialsRepository';

import IPurchaseOrdersRepository from '@modules/purchaseOrders/repositories/IPurchaseOrdersRepository';
import PurchaseOrdersRepository from '@modules/purchaseOrders/infra/json/repositories/PurchaseOrdersRepository';

import IWorkForcesRepository from '@modules/workForce/repositories/IWorkForcesRepository';
import WorkForcesRepository from '@modules/workForce/infra/json/repositories/WorkForcesRepository';

container.registerSingleton<IEquipmentsRepository>(
  'EquipmentsRepository',
  EquipmentsRepository,
);

container.registerSingleton<IMaterialsRepository>(
  'MaterialsRepository',
  MaterialsRepository,
);

container.registerSingleton<IPurchaseOrdersRepository>(
  'PurchaseOrdersRepository',
  PurchaseOrdersRepository,
);

container.registerSingleton<IWorkForcesRepository>(
  'WorkForcesRepository',
  WorkForcesRepository,
);
