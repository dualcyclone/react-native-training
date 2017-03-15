import React, { Component } from 'react';
import { View } from 'react-native';
import firebase, { auth } from 'firebase';

import { Card, CardSection, Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        { this.renderForm() }
      </View>
    );
  }

  renderForm() {
    switch (this.state.loggedIn) {
      case true:
        return (
          // Displays behind the header... so I've wrapped in these for now
          <Card>
            <CardSection>
              <Button onPress={ () => auth().signOut() }>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          // Displays behind the header... so I've wrapped in these for now
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }
}

export default App;
