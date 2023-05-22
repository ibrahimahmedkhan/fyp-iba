import axios from 'axios';

export async function getAllUsers() {
  return axios.get('http://localhost:4000/user/getallusers');
}
