import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {Card} from '../components/card';
import {EmptyList} from '../../styles';
import {ContextProvider} from '../../App';

const emptyList = <EmptyList>No data here!</EmptyList>;

const List = ({navigation}) => {
  const {tasksList} = useContext(ContextProvider);
  return (
    <FlatList
      data={tasksList}
      renderItem={({item}) => <Card data={item} navigation={navigation} />}
      ListEmptyComponent={emptyList}
    />
  );
};

export default List;
