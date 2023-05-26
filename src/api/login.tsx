import axios from 'axios';
import { backendUrl } from '@/constants/app-constants';

export async function loginApi(email: string, password: string) : Promise<any> {
  try {
    const response = await axios.post(`${backendUrl}/auth/user/login`, { email, password });
    const key = 'token';
    console.log('🚀 ~ file: login.tsx:8 ~ loginApi ~ response:', response);
    const value = response.data.token;
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return err;
  }
}
