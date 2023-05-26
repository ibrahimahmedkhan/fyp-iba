import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAa6lPkCGbX56Thx3aXKmopns4XUsB3cEU',
  authDomain: 'fyp-2023-3b870.firebaseapp.com',
  projectId: 'fyp-2023-3b870',
  databaseURL: 'https://fyp-2023-3b870-default-rtdb.firebaseio.com/',
  storageBucket: 'fyp-2023-3b870.appspot.com',
  messagingSenderId: '363344046860',
  appId: '1:363344046860:web:19ffdfc4fe43196456b729',
  measurementId: 'G-LXFX2T314B',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
