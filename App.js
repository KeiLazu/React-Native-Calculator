import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

<<<<<<< HEAD
import Calculator from './components/Calculator';
=======
>>>>>>> parent of d7776a1... prepare for rollback
import Style from './styles/style';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
