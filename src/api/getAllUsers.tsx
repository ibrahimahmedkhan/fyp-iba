import axios from 'axios';
import { backendUrl } from '@/constants/app-constants';

export async function getAllUsers() {
  return axios.get(`${backendUrl}/user/getallusers`);
}
