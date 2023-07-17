import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

import {CustomCard} from './src/components/customCard';
import {mockedData} from './src/constants/mockedData';

function App(): JSX.Element {
  const emptyList = <Text>No data here</Text>;

  return (
    <SafeAreaView>
      <FlatList
        data={mockedData}
        renderItem={({item}) => <CustomCard data={item} />}
        ListEmptyComponent={emptyList}
        style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default App;
