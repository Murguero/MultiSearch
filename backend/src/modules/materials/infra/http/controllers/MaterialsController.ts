import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListMaterialService from '@modules/materials/services/ListMaterialService';

export default class MaterialsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const listMaterial = container.resolve(ListMaterialService);

    const materials = await listMaterial.execute({
      name: String(name),
    });

    return response.json(materials);
  }
}
