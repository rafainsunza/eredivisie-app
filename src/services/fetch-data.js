import axios from 'axios';

export const getFootballData = async (matchday) => {
    try {
        const response = await axios.get('/.netlify/functions/football');
        const data = response.data;
        const standings = data.standings;
        const teams = data.teams;
        const matches = data.matches.filter((match) => match.matchday === matchday);
        const currentMatchday = data.currentMatchday;
        const maxMatchdays = Math.max(...data.matches.map((match) => match.matchday));

        return { standings, teams, matches, currentMatchday, maxMatchdays }

    } catch (error) {
        console.log('Error fetching football data:', error);
        throw error;
    }
}

