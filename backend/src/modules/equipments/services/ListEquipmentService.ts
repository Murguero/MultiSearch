import { injectable, inject } from 'tsyringe';

import IEquipmentsRepository from '../repositories/IEquipmentsRepository';

type IResponse = Array<{
  EquipmentID: string;
  EquipmentName: string;
}>;

interface IRequest {
  name: string;
}

@injectable()
class ListEquipmentService {
  constructor(
    @inject('EquipmentsRepository')
    private equipmentsRepository: IEquipmentsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<IResponse | undefined> {
    const equipments = await this.equipmentsRepository.findByName({
      name,
    });

    return equipments;
  }
}

export default ListEquipmentService;
