import {styled} from 'styled-components/native';
import {theme} from '../../constants/theme';

export const Title = styled.Text`
  padding-bottom: 10px;
  font-size: 20;
  font-weight: 600;
  color: ${theme.primary};
  font-family: 'Lato-Bold';
`;

export const Description = styled.Text`
  color: ${theme.primary};
  font-family: 'Lato-Regular';
  font-size: 17;
`;

export const State = styled.Text`
  margin-top: 15px;
  padding-top: 10px;
  border-top-width: 0.5px;
  border-top-color: ${theme.border};
  text-align: right;
  color: ${theme.primary};
  font-family: 'Lato-Bold';
`;

export const Main = styled.View<{completed: Boolean}>`
  margin: 12px;
  padding: 20px;
  background-color: ${({completed}) =>
    completed ? theme.cardPrimary : theme.cardSecondary};
  border-radius: 15px;
`;
