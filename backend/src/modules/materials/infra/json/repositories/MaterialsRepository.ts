import fs from 'fs';

import datDirConfig from '@config/dataDir';

import IMaterialsRepository from '@modules/materials/repositories/IMaterialsRepository';
import IFindByNameDTO from '@modules/equipments/dtos/IFindByNameDTO';
import Material from '../entities/Material';

class MaterialsRepository implements IMaterialsRepository {
  public async findByName({
    name,
  }: IFindByNameDTO): Promise<Material[] | undefined> {
    const path = `${datDirConfig.dataFolder}/materials.json`;

    const jsonData = fs.readFileSync(path, 'utf-8');
    const jsonArray: Material[] = JSON.parse(jsonData);

    const materials = jsonArray.filter(
      equip => equip.MaterialName.indexOf(name) > -1,
    );

    return materials;
  }
}

export default MaterialsRepository;
