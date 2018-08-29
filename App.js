import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Style from './styles/style';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
          <View style={Style.displayContainer}></View>
          <View style={Style.inputContainer}></View>
      </View>
    );
  }
}
