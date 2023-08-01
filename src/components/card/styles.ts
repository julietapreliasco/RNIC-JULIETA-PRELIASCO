import styled from 'styled-components/native';
import {theme} from '../../constants/theme';

export const Main = styled.View<{completed: Boolean}>`
  margin: 12px;
  padding: 20px;
  background-color: ${props =>
    props.completed ? theme.cardPrimary : theme.cardSecondary};
  border-radius: 15px;
`;

export const Title = styled.Text`
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.primary};
  max-width: 240px;
  font-family: 'Lato-Bold';
`;

export const Description = styled.Text`
  color: ${theme.primary};
  font-family: 'Lato-Regular';
  font-size: 17px;
  margin-top: 5px;
`;

export const State = styled.Text`
  margin-top: 15px;
  padding-top: 10px;
  border-top-width: 0.5px;
  border-top-color: ${theme.primary};
  text-align: right;
  color: ${theme.primary};
  font-family: 'Lato-Regular';
  max-height: 27px;
`;

export const TitleContainer = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin: 15px;
  border-radius: 5px;
  align-self: center;
`;

export const Date = styled.Text`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.primary};
  max-width: 240px;
  font-family: 'Lato-Regular';
`;
