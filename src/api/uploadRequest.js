import axios from 'axios';

// Need to add a proxy in package.json to allow only this base URL, not open it to the world!
const API = axios.create({ baseURL: 'http://127.0.0.1:5000' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}

	return req;
});

export const uploadImage = (data) => API.post('/upload', data);
export const uploadPost = (data) => API.post('/post', data);
