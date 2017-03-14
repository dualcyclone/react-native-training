import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={ styles.sectionStyle }>
      { props.children }
    </View>
  );
};

const styles = {
  sectionStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection }; // use this method when wrapping components up into an index (when using export *... method)
