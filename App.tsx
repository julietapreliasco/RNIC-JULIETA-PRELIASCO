import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  AppState,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

import {Card} from './src/components/card';
import {mockedData} from './src/constants/mockedData';
import {isAndroid} from './src/constants/utils';
import {AddTask} from './src/components/addTask';
import {Header} from './src/components/header';
import {NewData} from './src/types/types';
import RNBootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  const emptyList = <Text style={styles.emptyList}>No data here!</Text>;
  const [tasksList, setTasksList] = useState(mockedData);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        return setTasksList([]);
      }
    });
    return () => {
      subscription.remove();
    };
  });

  const addNewData = (newData: NewData) => {
    const newTask = {
      id: tasksList.length + 1,
      title: newData.title,
      description: newData.description,
      done: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar
            barStyle={isAndroid ? 'dark-content' : 'light-content'}
            backgroundColor={isAndroid ? 'white' : 'black'}
          />
          <Header />
          <FlatList
            data={tasksList}
            renderItem={({item}) => <Card data={item} />}
            ListEmptyComponent={emptyList}
            style={styles.listContainer}
          />
          <AddTask addNewData={addNewData} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: isAndroid ? 'white' : '#e4e0eb',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  emptyList: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 30,
  },
});

export default App;
