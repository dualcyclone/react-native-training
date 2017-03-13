import React from 'react';
import { Image, Text, View, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const Album = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    header, thumbnailContainer, thumbnail,
    headerText, headerTitle, albumArt
  } = styles;

  return (
    <Card>
      <CardSection style={ header }>
        <View style={ thumbnailContainer }>
          <Image style={ thumbnail } source={{ uri: thumbnail_image }} />
        </View>
        <View style={ headerText }>
          <Text style={ headerTitle }>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={ albumArt } source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={ () => Linking.openURL(url) }>
          Buy '{ title }' now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderWidth: 0,
    borderRadius: 25
  },
  headerText: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  albumArt: {
    flex: 1,
    height: 300,
    width: null,
    resizeMode: 'contain'
  }
};

export default Album;
