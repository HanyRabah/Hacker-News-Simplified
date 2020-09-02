import axios from 'axios';

export const baseUrl = process.env.API_BASE_URL;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const newTopStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoriesIds = async () => {
  const result = await axios.get(newStoriesUrl)
  .then(({ data }) => data)
  .catch(err => console.log(err));
  return result;
}

export const getTopStoriesIds = async () => {
  const result = await axios.get(newTopStoriesUrl)
  .then(({ data }) => data)
  .catch(err => console.log(err));
  return result;
}

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl}${storyId}.json`)
  .then(({ data }) => data)
  .catch(err => console.log(err));
  return result;
}
