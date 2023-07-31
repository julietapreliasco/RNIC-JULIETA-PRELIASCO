import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
