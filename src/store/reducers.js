import { combineReducers } from 'redux';

import NewsReducer from '../screens/News/redux/NewsReducers';

export default combineReducers({
  newsFeed: NewsReducer,
});
