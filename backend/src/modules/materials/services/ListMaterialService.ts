import { injectable, inject } from 'tsyringe';

import IMaterialsRepository from '../repositories/IMaterialsRepository';

type IResponse = Array<{
  MaterialID: string;

  MaterialName: string;
}>;

interface IRequest {
  name: string;
}

@injectable()
class ListMaterialsService {
  constructor(
    @inject('MaterialsRepository')
    private materialsRepository: IMaterialsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<IResponse | undefined> {
    const materials = await this.materialsRepository.findByName({
      name,
    });

    return materials;
  }
}

export default ListMaterialsService;
