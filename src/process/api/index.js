import axios from 'axios';

const API_URL = 'https://itunes.apple.com/search?term=Michael+jackson';

export const fetchSongsFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    const tracksList = response.data.results
      .filter(
        item => item.kind === 'song' && item.trackName && item.artworkUrl100,
      )
      .reverse();
    await new Promise(resolve => setTimeout(resolve, 1000));
    return tracksList;
  } catch (error) {
    throw new Error(error.message || 'Network error occurred');
  }
};