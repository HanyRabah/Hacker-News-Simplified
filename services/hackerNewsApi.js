import axios from 'axios';
import { storiesSelector } from '@/selectors/storiesSelector';
/**
 * API Urls Constnts 
 * exported to be used in Tests
 */

export const baseUrl = process.env.API_BASE_URL;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const newTopStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

/**
 * Get Stories Ids from hackersnews API
 * @returns {Object}
 */

export const getStoriesIds = async () => {
  const result = await axios.get(newStoriesUrl)
  .then(({ data }) => data)
  .catch(err => console.log(err));
  return result;
}

/**
 * Get Top Stories Ids from hackersnews API
 * @returns {Object}
 */

export const getTopStoriesIds = async () => {
  const result = await axios.get(newTopStoriesUrl)
  .then(({ data }) => data)
  .catch(err => console.log(err));
  return result;
}

/**
 * Get Story by Id from hackersnews API
 * @returns {Object}
 */

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl}${storyId}.json`)
  .then(({ data }) => data && storiesSelector(data))
  .catch(err => console.log(err));
  return result;
}
