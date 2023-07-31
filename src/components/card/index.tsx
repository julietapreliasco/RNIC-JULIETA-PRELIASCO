import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomCardProps, Data} from '../../types/types';
import {
  Title,
  Description,
  State,
  Main,
  TitleContainer,
  IconsContainer,
  Image,
} from './styles';
import CheckIcon from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';
import EditIcon from '../../assets/icons/edit-2.svg';
import {Routes} from '../../types/enums';

export const Card = ({data, navigation}: CustomCardProps): JSX.Element => {
  const {title, description, done, img} = data;
  const [completed, setCompletedTask] = useState<boolean>(done);
  const [selectedTask, setSelectedTask] = useState<Data>();

  useEffect(() => {
    setSelectedTask(data);
  }, [data]);

  return (
    <TouchableOpacity onPress={() => setCompletedTask(!completed)}>
      <Main completed={completed}>
        {img && <Image alt={title} source={img} />}
        <TitleContainer>
          <Title>{title}</Title>
          <IconsContainer>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.EDIT_TASK, {data: selectedTask})
              }>
              <EditIcon width={20} height={20} stroke={theme.primary} />
            </TouchableOpacity>
          </IconsContainer>
        </TitleContainer>
        <Description>{description}</Description>
        <State>
          {completed ? <CheckIcon stroke={theme.completed} /> : 'Not completed'}
        </State>
      </Main>
    </TouchableOpacity>
  );
};
