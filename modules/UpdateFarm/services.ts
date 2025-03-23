import request from '@/common/services/request';
import { UpdateFarm } from './types';

const UpdateFarmServices = {
  get: () => request<UpdateFarm>('/UpdateFarm'),
};

export default UpdateFarmServices;
