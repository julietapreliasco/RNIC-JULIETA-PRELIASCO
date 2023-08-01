import React, {createContext, useEffect, useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';

import {mockedData} from './src/constants/mockedData';
import {Header} from './src/components/header';
import {Data} from './src/types/types';
import RNBootSplash from 'react-native-bootsplash';
import {Main, Wrapper} from './styles';
import {theme} from './src/constants/theme';
import Navigation from './src/navigation';

interface ContextType {
  tasksList: Data[];
  setTasksList: (data: Data[]) => void;
}

export const ContextProvider = createContext<ContextType>({
  tasksList: mockedData,
  setTasksList: () => undefined,
});

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState(mockedData);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  });

  const contextValue = {
    tasksList,
    setTasksList,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Main>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.secondary}
            />
            <Header />
            <Navigation />
          </Main>
        </TouchableWithoutFeedback>
      </Wrapper>
    </ContextProvider.Provider>
  );
}

export default App;
