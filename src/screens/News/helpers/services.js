import { HTTP, status } from '../../../utils/http';

const getNewsFeed = async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=608c4bed5449436bb0ab8af88c487f67', {
      method: HTTP.GET,
    });
    const result = await status(response);
    return result.json();
  } catch (error) {
    throw new Error(`Get News feed call failed with Error: ${error.message}`);
  }
};

export default getNewsFeed;
