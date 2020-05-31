import fs from 'fs';

import datDirConfig from '@config/dataDir';

import IWorkForcesRepository from '@modules/workForce/repositories/IWorkForcesRepository';
import IFindByNameDTO from '@modules/equipments/dtos/IFindByNameDTO';
import WorkForces from '../entities/WorkForces';

class WorkForcesRepository implements IWorkForcesRepository {
  public async findByName({
    name,
  }: IFindByNameDTO): Promise<WorkForces[] | undefined> {
    const path = `${datDirConfig.dataFolder}/workforce.json`;

    const jsonData = fs.readFileSync(path, 'utf-8');
    const jsonArray: WorkForces[] = JSON.parse(jsonData);

    const workForces = jsonArray.filter(equip => equip.Name.indexOf(name) > -1);

    return workForces;
  }
}

export default WorkForcesRepository;
