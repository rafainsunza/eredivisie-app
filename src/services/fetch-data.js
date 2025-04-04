import axios from 'axios';

export const getFootballData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/football');
        const data = response.data;
        const standings = data.standings;
        const teams = data.teams;
        const matchDays = data.matchDays;
        const currentMatchday = data.currentMatchday;


        return { standings, teams, matchDays, currentMatchday }

    } catch (error) {
        console.log('Error fetching football data:', error);
        throw error;
    }
}

getFootballData();
