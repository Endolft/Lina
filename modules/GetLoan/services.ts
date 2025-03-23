import request from '@/common/services/request';
import { GetLoan } from './types';

const GetLoanServices = {
  get: () => request<GetLoan>('/GetLoan'),
};

export default GetLoanServices;
