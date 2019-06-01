import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import NewsTile from "./views/components/NewsTile";
import NewsActions from "./redux/NewsActions";

class NewsContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    this.props.dispatch(NewsActions.getNewsFeed());
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
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
  };

  render() {

    return (
      <View>
        <View style={{ paddingTop: 30 }}>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Your Daily Read</Text>
          <View style={{ height: 1, backgroundColor: 'grey', width: '90%', marginBottom: 10, alignSelf: 'center' }} />
        </View>
        {
          this.props.newsFeed.articles ? (
            <FlatList
              contentContainerStyle={{ padding: 10 }}
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
