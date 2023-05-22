import axios from 'axios';
import { backendUrl } from '@/constants/app-constants';

export async function loginApi(email: string, password: string) : Promise<any> {
  try {
    return await axios.post(`${backendUrl}/user/login`, { email, password });
  } catch (err) {
    return err;
  }
}
