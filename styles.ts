import styled from 'styled-components/native';
import {theme} from './src/constants/theme';

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Main = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.primary};
`;

export const EmptyList = styled.Text`
  font-size: 20;
  align-self: 'center';
  margin: 30px;
`;
