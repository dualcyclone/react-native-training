import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // Executed before render time
  componentWillMount() {
    // Initialize Firebase
    // Find the Firebase app here: https://console.firebase.google.com/project/authentication-aa6a0/overview
    firebase.initializeApp({
      apiKey: "AIzaSyBAHXWxa6aYTz2xQVrF3nB7dmvK70nu6Sc",
      authDomain: "authentication-aa6a0.firebaseapp.com",
      databaseURL: "https://authentication-aa6a0.firebaseio.com",
      storageBucket: "authentication-aa6a0.appspot.com",
      messagingSenderId: "105026534415"
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
