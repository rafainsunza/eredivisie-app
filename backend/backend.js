import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());


let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 60;

const API_KEY = process.env.FOOTBALL_API_KEY;
const API_URL = 'https://api.football-data.org/v4';

app.get('/api/football', async (req, res) => {
    const currentTime = Date.now();

    if (cachedData && (currentTime - lastFetchTime < CACHE_DURATION)) {
        return res.json(cachedData);
    }

    try {
        const teamsResponse = await axios.get(`${API_URL}/competitions/DED/teams`, {
            headers: {
                'X-Auth-Token': API_KEY,
            }
        });

        const standingsResponse = await axios.get(`${API_URL}/competitions/DED/standings`, {
            headers: {
                'X-Auth-Token': API_KEY,
            }
        });

        const matchesResponse = await axios.get(`${API_URL}/competitions/DED/matches`, {
            headers: {
                'X-Auth-Token': API_KEY,
            }
        });


        const competitonsResponse = await axios.get(`${API_URL}/competitions/DED`, {
            headers: {
                'X-Auth-Token': API_KEY,
            }
        });

        const standings = standingsResponse.data.standings[0].table || [];
        const teams = teamsResponse.data.teams || [];
        const matches = matchesResponse.data.matches || [];
        const currentMatchday = competitonsResponse.data.currentSeason.currentMatchday || null;

        cachedData = {
            standings,
            teams,
            matches,
            currentMatchday
        }
        lastFetchTime = currentTime;

        res.json(cachedData);
    } catch (error) {
        console.log('Error fetching football data', error);
        res.status(500).json({ message: 'Error fetching data' })
    }
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Backend server running on port', PORT);

});

