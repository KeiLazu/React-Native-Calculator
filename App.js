import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Calculator from './components/Calculator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}
