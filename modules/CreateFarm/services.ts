import request from '@/common/services/request';
import { CreateFarm } from './types';

const CreateFarmServices = {
  get: () => request<CreateFarm>('/CreateFarm'),
};

export default CreateFarmServices;
