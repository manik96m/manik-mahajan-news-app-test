import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NewsTileStyles from "../styles/NewsTileStyles";

class NewsTile extends Component {

  render() {
    const { title, author, urlToImage } = this.props;

    return (
      <View style={NewsTileStyles.container}>
        <View style={NewsTileStyles.newsTitleContainer}>
          <Text style={NewsTileStyles.newsTitleText}>{title}</Text>
          <Text style={NewsTileStyles.newsAuthorText}>{author}</Text>
        </View>
        <Image
          source={{ uri: urlToImage }}
          resizeMode="cover"
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}

export default NewsTile;