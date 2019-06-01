import getNewsFeed from '../helpers/services';
import NewsActionTypes from './NewsActionTypes';

const NewsActions = {
  successNewsFeedFetch: payload => ({ type: NewsActionTypes.SUCCESS_NEWS_FEED_FETCH, payload }),

  getNewsFeed: () => async (dispatch) => {
    try {
      const response = await getNewsFeed();
      dispatch(NewsActions.successNewsFeedFetch(response));
    } catch(error) {
      console.log('Error getting the news feed');
    }
  },
};

export default NewsActions;
