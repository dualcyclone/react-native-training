// Main file for rendering iOS applications

// Import library to help create component
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Import out own components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header title={ 'Albums' } />
    <AlbumList />
  </View>
);

// Render component to device
AppRegistry.registerComponent('albums', () => App);
