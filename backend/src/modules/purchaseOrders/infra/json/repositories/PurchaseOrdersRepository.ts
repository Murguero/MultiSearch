import fs from 'fs';

import datDirConfig from '@config/dataDir';

import IPurchaseOrdersRepository from '@modules/purchaseOrders/repositories/IPurchaseOrdersRepository';
import IFindByNameDTO from '@modules/equipments/dtos/IFindByNameDTO';
import PurchaseOrders from '../entities/PurchaseOrders';

class PurchaseOrdersRepository implements IPurchaseOrdersRepository {
  public async findByName({
    name,
  }: IFindByNameDTO): Promise<PurchaseOrders[] | undefined> {
    const path = `${datDirConfig.dataFolder}/purchase_orders.json`;

    const jsonData = fs.readFileSync(path, 'utf-8');
    const jsonArray: PurchaseOrders[] = JSON.parse(jsonData);

    const purchaseOrders = jsonArray.filter(
      equip => equip.MaterialName.indexOf(name) > -1,
    );

    return purchaseOrders;
  }
}

export default PurchaseOrdersRepository;
