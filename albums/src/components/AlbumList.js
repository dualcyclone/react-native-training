import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Album from './Album';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((data) => data.json())
      .then((json) => this.setState({ albums: json }))
      .catch((error) => {
        console.log('OH NO :(');
        console.log(error);
        this.setState({ albums: [] });
      })
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }

  renderAlbums() {
    return this.state.albums.map(
      // Use something unique as the key, so react knows how to update the specific item when receiving updated data
      (album) => <Album key={ album.title } album={ album } />
    );
  }
}

export default AlbumList;
