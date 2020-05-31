import { injectable, inject } from 'tsyringe';

import IPurchaseOrdersRepository from '../repositories/IPurchaseOrdersRepository';

type IResponse = Array<{
  PurchaseOrderID: number;

  MaterialID: string;

  MaterialName: string;

  Quantity: number;

  TotalCost: number;
}>;

interface IRequest {
  name: string;
}

@injectable()
class ListPurchaseOrdersService {
  constructor(
    @inject('PurchaseOrdersRepository')
    private purchaseOrdersRepository: IPurchaseOrdersRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<IResponse | undefined> {
    const purchaseOrders = await this.purchaseOrdersRepository.findByName({
      name,
    });

    return purchaseOrders;
  }
}

export default ListPurchaseOrdersService;
