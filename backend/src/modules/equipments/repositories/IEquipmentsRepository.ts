import Equipment from '../infra/json/entities/Equipment';
import IFindByNameDTO from '../dtos/IFindByNameDTO';

export default interface IEquipmentsRepository {
  findByName(data: IFindByNameDTO): Promise<Equipment[] | undefined>;
}
