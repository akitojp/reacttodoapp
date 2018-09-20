import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo App dayo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
