// utils/api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://api-kaltengventura.vercel.app', // <-- Change to your actual base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'bearer-token': 'kaltengventura2023',
  },
});

// Get token from AsyncStorage
const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('access_token');
  } catch {
    return null;
  }
};

// Attach token to every request
api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;
