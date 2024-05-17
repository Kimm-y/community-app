import axios from 'axios';

const API_URL = 'http://localhost:8000/api/mood-entries/';

export const fetchMoodEntries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMoodEntry = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateMoodEntry = async (id, data) => {
    const response = await axios.put(`${API_URL}${id}/`, data);
    return response.data;
};

export const deleteMoodEntry = async (id) => {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
};


