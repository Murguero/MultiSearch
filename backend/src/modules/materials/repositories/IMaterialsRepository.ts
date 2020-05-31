import Material from '../infra/json/entities/Material';
import IFindByNameDTO from '../dtos/IFindByNameDTO';

export default interface IMaterialsRepository {
  findByName(data: IFindByNameDTO): Promise<Material[] | undefined>;
}
