import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class NewsTile extends Component {

  render() {
    const { title, author, urlToImage } = this.props;

    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
            <Text style={{ color: 'grey' }}>{author}</Text>
          </View>
          <Image
            source={{ uri: urlToImage }}
            resizeMode="cover"
            style={{ width: 100, height: 100 }}
          />
        </View>
      </View>
    );
  }
}

export default NewsTile;