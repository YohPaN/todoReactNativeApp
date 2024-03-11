import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ToDoCard({ title, description, handleDelete, checked, handleChecked }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.checkBox} onPress={handleChecked}>
            {checked && <Ionicons name='checkmark' size={32} color="black" />}
        </TouchableOpacity>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description === "" ? "No description" : description}</Text>
            <TouchableOpacity onPress={handleDelete}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomColor: "rgba(60, 60, 67, 0.6)",
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 16,
        marginBottom: 16,
    },

    checkBox: {
        width: 40,
        height: 40,
        marginRight: 12,
        borderolor: "rgba(60, 60, 67, 0.6)",
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontWeight: "600",
        marginBottom: 4,
        fontSize: 18,
    },

    description: {
        color: "rgba(60, 60, 67, 0.6)",
        fontSize: 16,
        marginBottom: 8,
    },

    deleteText: {
        color: "rgba(0, 122, 255, 1)",
        fontSize: 15,
        fontWeight: "600",
    },
});