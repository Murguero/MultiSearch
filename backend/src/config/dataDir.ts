import path from 'path';

const dataFolder = path.resolve(__dirname, '..', '..', 'data');

interface IDataDirConfig {
  dataFolder: string;
}
export default {
  dataFolder,
} as IDataDirConfig;
