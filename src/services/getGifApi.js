const API_KEY = 'WJlpzyHxmveiE8UiQ4exEZhBqSMaSQ5F';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const getGifs = (searchText) => {
  return fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(
      searchText
    )}&api_key=${API_KEY}&limit=12`
  );
};
