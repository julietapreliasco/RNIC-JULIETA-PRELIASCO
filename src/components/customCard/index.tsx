import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomCardProps} from '../../types/types';
import {styles} from './styles';

export const CustomCard = ({data}: CustomCardProps): JSX.Element => {
  const {title, description, done} = data;
  const [finished, setFinishedState] = useState<Boolean>(done);

  return (
    <TouchableOpacity onPress={() => setFinishedState(!finished)}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{finished ? 'Completed' : 'Not completed'}</Text>
      </View>
    </TouchableOpacity>
  );
};
