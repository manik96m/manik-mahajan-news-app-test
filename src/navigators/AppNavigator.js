import { createAppContainer, createStackNavigator } from "react-navigation";

import NewsContainer from "../screens/News/NewsContainer";
import NewsDescriptionContainer from '../screens/News/NewsDescriptionContainer';
import Bookmarks from "../screens/News/views/Bookmarks";

const AppNavigator = createStackNavigator({
  NewsFeed: NewsContainer,
  NewsDescriptionContainer: NewsDescriptionContainer,
  Bookmarks: Bookmarks,
}, {

  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: "black",
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
});

export default createAppContainer(AppNavigator);
