import axios from 'axios';

// Need to add a proxy in package.json to allow only this base URL, not open it to the world!
const API = axios.create({ baseURL: 'http://localhost:5000' });

export const uploadImage = (data) => API.post('/upload', data);
export const uploadPost = (data) => API.post('/post', data);
