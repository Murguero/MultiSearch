import PurchaseOrders from '../infra/json/entities/PurchaseOrders';
import IFindByNameDTO from '../dtos/IFindByNameDTO';

export default interface IPurchaseOrdersRepository {
  findByName(data: IFindByNameDTO): Promise<PurchaseOrders[] | undefined>;
}
