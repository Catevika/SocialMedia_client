import axios from 'axios';

// Need to add a proxy in package.json to allow only this base URL, not open it to the world!
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const logIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
