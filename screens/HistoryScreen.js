import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const historyData = [
  { id: '1', date: '2023-09-29', activity: 'Activity 1' },
  { id: '2', date: '2023-09-28', activity: 'Activity 2' },
  { id: '3', date: '2023-09-27', activity: 'Activity 3' },
];

const HistoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.date}</Text>
      <Text>{item.activity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
});

export default HistoryScreen;
