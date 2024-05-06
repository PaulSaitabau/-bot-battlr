import axios from 'axios';

const API_URL = 'http://localhost:3000/bots';

export const getBots = () => axios.get(API_URL).then(res => res.data);
export const enlistBot = bot => axios.post(API_URL, bot);
export const releaseBot = bot => axios.delete(`${API_URL}/${bot.id}`);
export const deleteBot = bot => axios.delete(`${API_URL}/${bot.id}`);
