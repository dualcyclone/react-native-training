import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, placeholder, secureTextEntry = false, value, onChangeText }) => {
  const { input, labelStyle, container } = styles;

  return (
    <View style={ container }>
      <Text style={ labelStyle }>{ label }</Text>
      <TextInput
        autoCorrect={ false }
        autoCapitalize="none"
        placeholder={ placeholder }
        secureTextEntry={ secureTextEntry }
        style={ input }
        value={ value }
        onChangeText={ onChangeText }
      />
    </View>
  );
};

const styles = {
  input: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2 // 2/3 of available space given to input
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // 1/3 of available space given to label
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
