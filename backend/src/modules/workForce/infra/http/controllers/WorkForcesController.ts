import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListWorkForcesService from '@modules/workForce/services/ListWorkForcesService';

export default class PurchaseOrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const listWorkForces = container.resolve(ListWorkForcesService);

    const workForces = await listWorkForces.execute({
      name: String(name),
    });

    return response.json(workForces);
  }
}
