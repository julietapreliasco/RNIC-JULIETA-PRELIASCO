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

export const SendButton = styled.TouchableOpacity<{isButtonDisabled: Boolean}>`
  padding: 10px;
  border-radius: 20px;
  background-color: ${props =>
    props.isButtonDisabled ? theme.disabled : theme.secondary};
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${theme.primary};
  margin-right: 10px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DatePickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 5px;
`;

export const DateModalButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
