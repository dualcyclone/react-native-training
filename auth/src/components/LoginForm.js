import React, { Component } from 'react';
import { Text } from 'react-native';
import { auth } from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="your@email.com"
            value={ this.state.email }
            onChangeText={ email => this.setState({ email }) } />
        </CardSection>
        <CardSection>
          {/* For boolean props, we don't need to supply a value, simply having the prop name means "true" */}
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={ this.state.password }
            onChangeText={ password => this.setState({ password }) } />
        </CardSection>
        <Text style={ styles.errorStyle }>
          { this.state.error }
        </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // In this tutorial, we try to create an account using the supplied details for any login error :-/
        auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed!', loading: false });
  }

  renderButton() {
    return (
      this.state.loading ? <Spinner size="large" /> : <Button onPress={ this.onButtonPress.bind(this) }>Log in</Button>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
