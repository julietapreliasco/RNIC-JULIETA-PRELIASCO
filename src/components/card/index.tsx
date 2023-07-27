import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomCardProps} from '../../types/types';
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
import DeleteIcon from '../../assets/icons/trash-2.svg';
import EditIcon from '../../assets/icons/edit-2.svg';

export const Card = ({data}: CustomCardProps): JSX.Element => {
  const {title, description, done, img} = data;
  const [completed, setCompletedTask] = useState<boolean>(done);

  return (
    <TouchableOpacity onPress={() => setCompletedTask(!completed)}>
      <Main completed={completed}>
        {img && <Image alt={title} source={img} />}
        <TitleContainer>
          <Title>{title}</Title>
          <IconsContainer>
            <TouchableOpacity>
              <DeleteIcon
                width={20}
                height={20}
                style={{marginRight: 10}}
                stroke={theme.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity>
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
