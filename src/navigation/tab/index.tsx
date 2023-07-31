import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ListIcon from '../../assets/icons/list.svg';
import PlusCircle from '../../assets/icons/plus-circle.svg';
import ListStackNavigator from '../stack';
import {Routes} from '../../types/enums';
import AddTask from '../../screens/addTask';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.STACK_TAB}
        component={ListStackNavigator}
        options={{
          tabBarIcon: ({color}) => <ListIcon color={color} />,
          title: 'List',
        }}
      />
      <Tab.Screen
        name={Routes.ADD_TASK}
        component={AddTask}
        options={{
          tabBarIcon: ({color}) => <PlusCircle color={color} />,
          title: 'Add Task',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
