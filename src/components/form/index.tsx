import React, {useContext, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {Data, FormProps} from '../../types/types';
import {
  Button,
  ButtonText,
  Input,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles';
import PlusIcon from '../../assets/icons/plus-circle.svg';
import {theme} from '../../constants/theme';
import {ContextProvider} from '../../../App';
import {NewData} from '../../types/types';
import {Routes} from '../../types/enums';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DeleteIcon from '../../assets/icons/trash-2.svg';

export const Form = ({isEditing, selectedData, navigation}: FormProps) => {
  const {setTasksList, tasksList} = useContext(ContextProvider);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionRef = useRef<TextInput>(null);
  const isButtonDisabled = !(title.length && description.length);

  const addNewData = (newData: NewData) => {
    const newTask = {
      id: tasksList.length + 1,
      title: newData.title,
      description: newData.description,
      done: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  const editData = (data: NewData) => {
    const updatedData = tasksList.map(task => {
      if (selectedData?.id === task.id) {
        return {...task, ...data};
      } else {
        return task;
      }
    });
    setTasksList(updatedData);
  };

  const deleteData = (data: Data | undefined) => {
    const filteredTask = tasksList.filter(task => task.id === data?.id);
    const index = tasksList.indexOf(filteredTask[0]);
    tasksList.splice(index, 1);
  };

  const onSubmitPress = () => {
    const newData = {
      title: title,
      description: description,
    };
    if (isButtonDisabled === false) {
      if (isEditing) {
        editData(newData);
      } else {
        addNewData(newData);
      }
    }
    Keyboard.dismiss();
    setTitle('');
    setDescription('');
    navigation.navigate(Routes.LIST);
  };

  const onDelete = () => {
    deleteData(selectedData);
    setTitle('');
    setDescription('');
    navigation.navigate(Routes.LIST);
  };

  useEffect(() => {
    if (isEditing && selectedData) {
      setTitle(selectedData.title);
      setDescription(selectedData.description);
    }
  }, [selectedData, isEditing]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{isEditing ? 'Edit task' : 'Add task'}</Title>
        {isEditing && (
          <TouchableOpacity onPress={() => onDelete()}>
            <DeleteIcon
              width={20}
              height={20}
              style={{marginRight: 10}}
              stroke={'black'}
            />
          </TouchableOpacity>
        )}
      </TitleWrapper>
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
        <ButtonText>{isEditing ? 'Edit' : 'Add'}</ButtonText>
        <PlusIcon width={21} height={21} stroke={theme.primary} />
      </Button>
    </Wrapper>
  );
};
