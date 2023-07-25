import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomCardProps} from '../../types/types';
import {Title, Description, State, Main} from './styles';

export const Card = ({data}: CustomCardProps): JSX.Element => {
  const {title, description, done} = data;
  const [completed, setCompletedTask] = useState<Boolean>(done);

  return (
    <TouchableOpacity onPress={() => setCompletedTask(!completed)}>
      <Main completed={completed}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <State>{completed ? 'Completed' : 'Not completed'}</State>
      </Main>
    </TouchableOpacity>
  );
};
