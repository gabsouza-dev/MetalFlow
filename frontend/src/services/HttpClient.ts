import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const HttpClient = {
    async get(endpoint: string) {
        try {
            const response = await axios.get(`${API_URL}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    async post(endpoint: string, data: any) {
        try {
            const response = await axios.post(`${API_URL}${endpoint}`, data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
};
