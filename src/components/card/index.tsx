import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomCardProps} from '../../types/types';
import {styles} from './styles';

export const Card = ({data}: CustomCardProps): JSX.Element => {
  const {title, description, done} = data;
  const [completed, setCompletedTask] = useState<Boolean>(done);

  return (
    <TouchableOpacity onPress={() => setCompletedTask(!completed)}>
      <View style={completed ? styles.completedTask : styles.uncompletedTask}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.state}>
          {completed ? 'Completed' : 'Not completed'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
