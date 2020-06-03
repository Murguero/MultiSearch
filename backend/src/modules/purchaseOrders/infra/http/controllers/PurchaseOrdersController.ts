import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListPurchaseOrdersService from '@modules/purchaseOrders/services/ListPurchaseOrdersService';

export default class PurchaseOrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const listPurchaseOrders = container.resolve(ListPurchaseOrdersService);

    const purchaseOrders = await listPurchaseOrders.execute({
      name: String(name),
    });

    return response.json(purchaseOrders);
  }
}
