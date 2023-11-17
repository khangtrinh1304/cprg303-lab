import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable 
          key={index}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#E0E0E0' : '#FFF' },
            styles.task
          ]}
        >
          <View>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  task: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#D41267 ',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  taskText: {
    fontSize: 18,
    color: '#FAFA08',
  },
});
