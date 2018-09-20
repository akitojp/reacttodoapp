import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      todo: [
        {index: 1, title: 'appを作る', done: false},
        {index: 2, title: '何かやる', done: false}
      ],
      currentIndex: 2
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Filter */}
        <View style={styles.filter}>
          <Text>filterを配置</Text>
        </View>
        {/* todolist */}
        <ScrollView style={styles.todolist}>
          {/* Flat listを実装 */}
          <FlatList data={this.state.todo}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + item.index}
          />
        </ScrollView>
        {/* input area */}
        <View style={styles.input}>
          <Text>inputエリアを配置</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1,
  },
  input: {
    height: 30,
  },
});
