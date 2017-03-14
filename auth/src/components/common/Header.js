import React from 'react';
import { Text, View } from 'react-native';

const Header = ( props ) => {
  const { container, headerText } = styles;

  return (
    <View style={ container }>
      <Text style={ headerText }>
        { props.title }
      </Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  }
};

export { Header }; // use this method when wrapping components up into an index (when using export *... method)
