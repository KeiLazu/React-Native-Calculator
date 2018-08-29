import React from 'react';
import {
  View,
  Text
} from 'react-native';

<<<<<<< HEAD
import Style from './styles/Style';
import ReactCalculator from './components/ReactCalculator';
=======
import Calculator from './components/Calculator';
>>>>>>> parent of bf583cc... changed calculator js into proper calculator, add headerapp previously calcualtor js

export default class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <View style={Style.rootContainer}>
          <View style={Style.displayContainer}></View>
          <View style={Style.inputContainer}></View>
=======
      <View style={styles.container}>
        <Calculator />
>>>>>>> parent of bf583cc... changed calculator js into proper calculator, add headerapp previously calcualtor js
      </View>
    );
  }
}
