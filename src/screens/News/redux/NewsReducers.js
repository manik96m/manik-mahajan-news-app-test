import NewsActionTypes from './NewsActionTypes';

const initialState = {
  articles: [],
};

export default (state = {}, action) => {
  switch(action.type) {
    case NewsActionTypes.SUCCESS_NEWS_FEED_FETCH:
      return {
        ...state,
        articles: [
          ...action.payload.articles,
        ],
      };
    default:
      return state;
  }
};
