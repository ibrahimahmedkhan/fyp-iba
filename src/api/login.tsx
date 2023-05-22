import axios from 'axios';

export async function loginApi(email: string, password: string) : Promise<any> {
  try {
    return await axios.post('http://localhost:4000/user/login', { email, password });
  } catch (err) {
    return err;
  }
}
