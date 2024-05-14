import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTask, clearAllTasks } from "../redux/slices";
import { selectTodo } from "../redux/selectors";

export function AddTask() {
  const [newTask, setNewTask] = useState('');

  const taskLength = useSelector(selectTodo).length;

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addTask(newTask));
    setNewTask('');
  }

  function handleClearAll() {
    dispatch(clearAllTasks());
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello</Text>
      <TextInput
        placeholder="Enter task..."
        value={newTask}
        onChangeText={(value) => setNewTask(value)}
        style={{
          borderWidth: 1,
          padding: 8,
          borderRadius: 8
        }} />
      <Button
        title="Add task"
        onPress={handleAdd}
        disabled={!newTask} />
      <Button
        onPress={handleClearAll}
        title="Clear All"
        color="#333"
        disabled={!taskLength} />
    </View>
  )
}
