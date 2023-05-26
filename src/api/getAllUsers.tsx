import axios from 'axios';
import { backendUrl } from '@/constants/app-constants';

export async function getAllUsers() {
  try {
    return await axios.get(`${backendUrl}/user/`);
  } catch (err) {
    console.log(err);
  }
}
