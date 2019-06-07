import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { retrieveBookmarks} from "../helpers/utils";
import NewsTile from "./components/NewsTile";

class Bookmarks extends Component {
  state = {
    bookmarks: [],
    isLoading: true,
    error: '',
  };

  async componentDidMount() {
    const bookmarks = await retrieveBookmarks();
    if (bookmarks) {
      console.log('bookmarks: ', bookmarks);
      this.setState({ isLoading: false, bookmarks: JSON.parse(bookmarks) });
    } else {
      this.setState({ isLoading: false, error: 'No bookmarks found!'})
    }
  }

  getLoadingOrError() {
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }
    if (this.state.error) {
      return <Text>{this.state.error}</Text>;
    }
  }

  renderBookmarks() {

    return this.state.bookmarks.map((item, index) => {
      console.log('item: ', item);
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this.props.navigation.navigate({
              routeName: 'NewsDescriptionContainer',
              params: { articleIndex: index },
            });
          }}
          style={{ marginBottom: 10 }}
        >
          <NewsTile
            title={item.title}
            author={item.author}
            urlToImage={item.urlToImage}
          />
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { isLoading, error, articles } = this.state;

    return(
      <View>
        {(isLoading || error) ? this.getLoadingOrError() : this.renderBookmarks()}
      </View>
    );
  }
}

export default Bookmarks;
