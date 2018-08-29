import React, {
  Component
} from 'react';

import { 
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class Calculator extends Component {
  render() {
    return(
      <View>
        <View style={styles.statusBar} />
        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Calculator App
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#FFFFFF',
    marginLeft: 16,
    marginTop: 16,
    marginRight: 16,
  },
  statusBar: {
    height: 24,
    backgroundColor: '#000',
  },
  header: {
    height: 56,
    backgroundColor: '#56f8ef',
  },
});