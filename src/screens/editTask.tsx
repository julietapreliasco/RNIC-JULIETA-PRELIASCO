import React from 'react';
import {Form} from '../components/form';

const EditTask = ({route, navigation}) => {
  return (
    <Form
      selectedData={route.params.data}
      isEditing={true}
      navigation={navigation}
    />
  );
};

export default EditTask;
