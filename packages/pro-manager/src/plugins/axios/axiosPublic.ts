import { API_AUTH_URL } from '@/constants';
import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

