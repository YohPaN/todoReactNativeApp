import { View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '@components/UI/Button';
import Input from "@components/UI/Input";
import useNewToDoManage from '@hooks/useNewToDoManage';
import Title from '@components/UI/Title';

export default function ToDoCreate({navigation}) {

  const { fieldsTable, handleSubmit } = useNewToDoManage(navigation={navigation});

  return (
    <View style={styles.container}>
      <Title>Add a new task</Title>
      {fieldsTable.map(({ value, onChange, placeholder }) => {
        return (
          <Input 
            key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )
      })}
      <Button onPress={handleSubmit}>Validate</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: "#f7f3e9"
    },
  });