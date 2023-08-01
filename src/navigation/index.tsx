import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import TabNavigator from './tab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Navigation = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
