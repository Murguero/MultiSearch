import { injectable, inject } from 'tsyringe';

import IWorkForcesRepository from '../repositories/IWorkForcesRepository';

type IResponse = Array<{
  WorkforceID: number;
  Name: string;
  Shift: string;
}>;

interface IRequest {
  name: string;
}

@injectable()
class ListWorkForcesService {
  constructor(
    @inject('WorkForcesRepository')
    private workForcesRepository: IWorkForcesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<IResponse | undefined> {
    const workForce = await this.workForcesRepository.findByName({
      name,
    });

    return workForce;
  }
}

export default ListWorkForcesService;
