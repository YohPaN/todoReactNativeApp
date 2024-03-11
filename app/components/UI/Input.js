import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

export default function Input({placeholder, value, onChange}) {
  return (
    <TextInput 
        placeholder={placeholder} 
        style={styles.container}
        value={value}
        onChangeText={(e) => onChange(e)}
    >
    </TextInput>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 19,
        paddingTop: 19,
        fontSize: 17,
        borderBottomColor: "rgba(60, 60, 67, 0.3)",
        marginBottom: 24
    },
  });