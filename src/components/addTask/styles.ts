import styled from 'styled-components/native';
import {theme} from '../../constants/theme';

export const Wrapper = styled.View`
  background-color: ${theme.primary};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  align-self: center;
  font-weight: 700;
  color: ${theme.cardSecondary};
`;

export const Input = styled.TextInput`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity<{isButtonDisabled: Boolean}>`
  padding: 10px;
  border-radius: 20px;
  background-color: ${(isButtonDisabled: {isButtonDisabled: Boolean}) =>
    isButtonDisabled.isButtonDisabled ? theme.disabled : theme.secondary};
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${theme.primary};
  margin-right: 10px;
`;
