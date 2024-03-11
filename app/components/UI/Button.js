import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Button({children, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#007AFF',
        borderRadius: 14,
        alignItems: "center",
        marginTop: 32
    },
    title: {
        color: "white",
        margin: 17,
        fontSize: 17,
        fontWeight: "600"
    },
  });