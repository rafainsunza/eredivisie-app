// netlify/functions/football.mjs
import axios from 'axios';
import 'dotenv/config'; // local testing with .env

const API_KEY = process.env.FOOTBALL_API_KEY;
const API_URL = 'https://api.football-data.org/v4';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

let cachedData = null;
let lastFetchTime = 0;

export async function handler(event, context) {
    const now = Date.now();

    // Return cached data if still valid
    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
        return {
            statusCode: 200,
            body: JSON.stringify(cachedData),
        };
    }

    try {
        const [teamsRes, standingsRes, matchesRes, competitionsRes] = await Promise.all([
            axios.get(`${API_URL}/competitions/DED/teams`, { headers: { 'X-Auth-Token': API_KEY } }),
            axios.get(`${API_URL}/competitions/DED/standings`, { headers: { 'X-Auth-Token': API_KEY } }),
            axios.get(`${API_URL}/competitions/DED/matches`, { headers: { 'X-Auth-Token': API_KEY } }),
            axios.get(`${API_URL}/competitions/DED`, { headers: { 'X-Auth-Token': API_KEY } }),
        ]);

        const data = {
            standings: standingsRes.data?.standings?.find(s => s.type === 'TOTAL')?.table || [],
            teams: teamsRes.data?.teams || [],
            matches: matchesRes.data?.matches || [],
            currentMatchday: competitionsRes.data?.currentSeason?.currentMatchday || null,
        };

        // Save to in-memory cache
        cachedData = data;
        lastFetchTime = now;

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (err) {
        console.error('Error fetching football API:', err);

        // fallback to cached data if available
        if (cachedData) {
            return { statusCode: 200, body: JSON.stringify(cachedData) };
        }

        return { statusCode: 500, body: JSON.stringify({ message: 'Error fetching data' }) };
    }
}
