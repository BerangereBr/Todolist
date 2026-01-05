import axios from 'axios';

const API_URL = import.meta.VITE_API_URL;

export const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true,
});