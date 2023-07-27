import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  AppState,
  Platform,
  StatusBar,
} from 'react-native';

import {Card} from './src/components/card';
import {mockedData} from './src/constants/mockedData';
import {AddTask} from './src/components/addTask';
import {Header} from './src/components/header';
import {NewData} from './src/types/types';
import RNBootSplash from 'react-native-bootsplash';
import {EmptyList, Main, Wrapper} from './styles';
import {theme} from './src/constants/theme';

function App(): JSX.Element {
  const emptyList = <EmptyList>No data here!</EmptyList>;
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
    <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Main>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.secondary}
          />
          <Header />
          <FlatList
            data={tasksList}
            renderItem={({item}) => <Card data={item} />}
            ListEmptyComponent={emptyList}
          />
          <AddTask addNewData={addNewData} />
        </Main>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
}

export default App;
