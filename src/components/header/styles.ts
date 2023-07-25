import styled from 'styled-components/native';
import {theme} from '../../constants/theme';

export const Wrapper = styled.View`
  justify-content: center;
  padding-left: 10px;
  margin-bottom: 6px;
  height: 70px;
  background-color: ${theme.secondary};
`;

export const Title = styled.Text`
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  color: ${theme.primary};
`;
