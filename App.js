import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigator from './BottomNavigator/Navigator';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <BottomNavigator />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default App;
