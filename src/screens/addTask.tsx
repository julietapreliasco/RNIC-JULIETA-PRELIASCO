import React from 'react';
import {Form} from '../components/form';

const AddTask = ({navigation}) => {
  return <Form isEditing={false} navigation={navigation} />;
};

export default AddTask;
