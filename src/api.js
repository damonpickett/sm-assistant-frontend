import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const addTextEntry = (title, content) => {
    return api.post('/entries/', { title, content });
};

export const getTextEntries = () => {
    return api.get('/entries/');
};
