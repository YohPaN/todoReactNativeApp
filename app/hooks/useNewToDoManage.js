import { useState } from 'react'
import useAsyncStorageCRUD from './useAsyncStorageCRUD';

export default function useNewToDoManage({navigation}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useAsyncStorageCRUD();

    const fieldsTable = [
        {
            value: title,
            onChange: (e) => setTitle(e),
            placeholder: "Name of the task to do"
        },
        {
            value: description,
            onChange: (e) => setDescription(e),
            placeholder: "Description (optionnal)"
        },
    ]

    async function handleSubmit() {
        if(title.length === 0) {
            return alert("The task needs a title")
        }
        await createTask({ title, description, checked: false });
        setTitle("");
        setDescription("");
        // navigation.navigate("Home")
    }

    return { fieldsTable, handleSubmit };
}