import React, {useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {AddTaskProps} from '../../types/types';
import {Button, ButtonText, Input, Title, Wrapper} from './styles';
import PlusIcon from '../../assets/icons/plus-circle.svg';
import {theme} from '../../constants/theme';

export const AddTask = ({addNewData}: AddTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionRef = useRef<TextInput>(null);

  const onSubmitPress = () => {
    const newData = {
      title: title,
      description: description,
    };
    if (isButtonDisabled === false) {
      addNewData(newData);
    }
    Keyboard.dismiss();
    setTitle('');
    setDescription('');
  };

  const isButtonDisabled = !(title.length && description.length);

  return (
    <Wrapper>
      <Title>Add new task</Title>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={() => {
          descriptionRef.current?.focus();
        }}
      />
      <Input
        ref={descriptionRef}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        onSubmitEditing={() => descriptionRef.current?.blur()}
      />
      <Button
        onPress={onSubmitPress}
        isButtonDisabled={isButtonDisabled}
        disabled={isButtonDisabled}>
        <ButtonText>Send</ButtonText>
        <PlusIcon width={21} height={21} stroke={theme.primary} />
      </Button>
    </Wrapper>
  );
};
