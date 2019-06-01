import React, { Component } from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';

class NewsDescriptionContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('pageTitle'),
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: "white",
    },
    headerTitleStyle: {
      color: "black",
      fontSize: 16,
      fontWeight: 'normal',
    },
    shadowOpacity: 0.35,
    shadowColor: 'black',
  });

  componentDidMount() {
    this.props.navigation.setParams({
      pageTitle: this.props.newsFeed.articles[this.props.navigation.getParam('articleIndex')].title,
    });
  }

  render() {
    const { title, author, urlToImage, content, publishedAt } = this.props.newsFeed.articles[this.props.navigation.getParam('articleIndex')]

    return (
      <ScrollView
        contentContainerStyle={{ padding: 10 }}
      >
        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>{author}</Text>
          <Text style={{ marginLeft: 10, color: 'grey' }}>{new Date(publishedAt).toDateString()}</Text>
        </View>
        {urlToImage && (<Image
          source={{ uri: urlToImage }}
          resizeMode="cover"
          style={{ width: '100%', height: 250 }}
        />)}
        <Text style={{ marginTop: 10, color: 'black', fontSize: 18  }}>{content}</Text>
      </ScrollView>

    );
  }
}

const mapStateToProps = store => ({ newsFeed: store.newsFeed });

export default connect(mapStateToProps)(NewsDescriptionContainer);
