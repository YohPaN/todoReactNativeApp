import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAppContext from "./useAppContext";

export default function useAsyncStorageCRUD() {
    const { state: { toDoList }, dispatch } = useAppContext();

    function toDoListChange(newList) {
        dispatch({type: "TO_DO_LIST_CHANGE", toDoList: newList});
    }

    useEffect(() => {
        AsyncStorage.getItem("todolist")
            .then((savedTasks) => {
                if(savedTasks) {
                    let parseList = JSON.parse(savedTasks);
                    toDoListChange(parseList);    
                }
            })
    }, [])

    async function createTask(task) {
        const newToDoList = [...toDoList];
        newToDoList.push(task);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }

    async function updateTask(index, task) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1, task);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }

    async function deleteTask(index) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }
  return { toDoList, createTask, updateTask, deleteTask };
}