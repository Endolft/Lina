import request from '@/common/services/request';
import { Notifications } from './types';

const NotificationsServices = {
  get: () => request<Notifications>('/Notifications'),
};

export default NotificationsServices;
