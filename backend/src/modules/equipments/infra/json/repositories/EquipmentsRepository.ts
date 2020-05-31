import fs from 'fs';

import datDirConfig from '@config/dataDir';

import IEquipmentsRepository from '@modules/equipments/repositories/IEquipmentsRepository';
import IFindByNameDTO from '@modules/equipments/dtos/IFindByNameDTO';
import Equipment from '../entities/Equipment';

class EquipmentsRepository implements IEquipmentsRepository {
  public async findByName({
    name,
  }: IFindByNameDTO): Promise<Equipment[] | undefined> {
    const path = `${datDirConfig.dataFolder}/equipments.json`;

    const jsonData = fs.readFileSync(path, 'utf-8');
    const jsonArray: Equipment[] = JSON.parse(jsonData);

    const equipments = jsonArray.filter(
      equip => equip.EquipmentName.indexOf(name) > -1,
    );

    return equipments;
  }
}

export default EquipmentsRepository;
