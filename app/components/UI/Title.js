import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "600",
        fontSize: 32,
        marginBottom: 42,
    },
  });