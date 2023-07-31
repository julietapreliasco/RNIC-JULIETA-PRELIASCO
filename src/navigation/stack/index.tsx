import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import List from '../../screens';
import {Routes} from '../../types/enums';
import EditTask from '../../screens/editTask';

const Stack = createStackNavigator();

const ListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.LIST} component={List} />
      <Stack.Screen name={Routes.EDIT_TASK} component={EditTask} />
    </Stack.Navigator>
  );
};

export default ListStackNavigator;
