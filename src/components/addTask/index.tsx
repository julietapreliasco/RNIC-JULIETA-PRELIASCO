import React, {useRef, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AddTaskProps} from '../../types/types';
import {styles} from './styles';

export const AddTask = ({addNewData}: AddTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionRef = useRef<TextInput>(null);

  const onSubmitPress = () => {
    const newData = {
      title: title,
      description: description,
    };
    if (title.length || description.length) {
      addNewData(newData);
    }
    Keyboard.dismiss();
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addTask}>Add new task</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={value => setTitle(value)}
        onSubmitEditing={() => {
          descriptionRef.current?.focus();
        }}
      />
      <TextInput
        style={styles.input}
        ref={descriptionRef}
        placeholder="Description"
        value={description}
        onChangeText={value => setDescription(value)}
        onSubmitEditing={() => descriptionRef.current?.blur()}
      />
      <TouchableOpacity onPress={onSubmitPress} style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
