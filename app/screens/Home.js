import { StyleSheet } from 'react-native'
import React from 'react'
import Button from '@components/UI/Button'
import useAsyncStorageCRUD from '../hooks/useAsyncStorageCRUD';
import ToDoCard from '../components/UI/ToDoCard';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '@components/UI/Title';

export default function Home({navigation}) {
  const { toDoList, updateTask, deleteTask } = useAsyncStorageCRUD();
    function handlePress() {
        navigation.navigate("ToDoCreate");
    }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Title>My to-do app</Title>
        {toDoList.map(({ title, description, checked }, index) => {
          function handleDelete() {
            deleteTask(index);
          }

          function handleChecked() {
            updateTask(index, { title, description, checked: !checked });
          }

          return (
            <ToDoCard 
              key={index} 
              title={title} 
              description={description} 
              checked={checked}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          )
        })}
        <Button onPress={handlePress} title='Go to create page'>+ Add to-do</Button>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    scrollView: {
      minHeight: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });