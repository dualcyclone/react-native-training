import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { button, buttonText } = styles;

  return (
    <TouchableOpacity onPress={ onPress } style={ button }>
      <Text style={ buttonText }>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button }; // use this method when wrapping components up into an index (when using export *... method)
