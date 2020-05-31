import WorkForces from '../infra/json/entities/WorkForces';
import IFindByNameDTO from '../dtos/IFindByNameDTO';

export default interface IWorkForcesRepository {
  findByName(data: IFindByNameDTO): Promise<WorkForces[] | undefined>;
}
