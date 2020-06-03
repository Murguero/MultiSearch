import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListEquipmentService from '@modules/equipments/services/ListEquipmentService';

export default class EquipmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const listEquipment = container.resolve(ListEquipmentService);

    const equipments = await listEquipment.execute({
      name: String(name),
    });

    return response.json(equipments);
  }
}
