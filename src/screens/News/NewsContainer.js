import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import NewsTile from "./views/components/NewsTile";
import NewsActions from "./redux/NewsActions";
import NewsContainerStyles from "./views/styles/NewsContainerStyles";
import { bookmarkArticle } from "./helpers/utils";

class NewsContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: navigation.getParam('headerRight'),
    };
  };

  componentDidMount() {
    this.props.dispatch(NewsActions.getNewsFeed());
    const headerRight = (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate({ routeName: 'Bookmarks' })}
        >
          <Text style={{ color: 'white' }}>Bookmarks</Text>
        </TouchableOpacity>
      );
    this.props.navigation.setParams({ headerRight });

    // AsyncStorage.clear((response) => {
    //   console.log('data cleared: ', response);
    // })
  }

  renderItem = ({ item, index }) => {
    console.log('item: ', item);
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          bookmarkArticle(item);
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
  };

  render() {

    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <View style={NewsContainerStyles.staticContentContainer}>
          <Text style={NewsContainerStyles.staticTitle}>Your Daily Read</Text>
          <View style={NewsContainerStyles.line} />
        </View>
        {
          this.props.newsFeed.articles ? (
            <FlatList
              contentContainerStyle={NewsContainerStyles.list}
              data={this.props.newsFeed.articles}
              renderItem={this.renderItem}
            />
          ): <Text>Loading...</Text>
        }
      </View>


    );
  }
}

const mapStateToProps = store => ({ newsFeed: store.newsFeed });

export default connect(mapStateToProps)(NewsContainer);
