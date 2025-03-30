import axios from 'axios';

const API_URL = '/v4';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY,
    },
});

export const getFootballData = async () => {
    try {
        const response = await apiClient.get('/competitions/DED/standings');
        return response.data;
    } catch (error) {
        console.log('Error fetching eredivisie standings data:', error);
        throw error;
    }
}





