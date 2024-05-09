import { Text, TextInput, Button } from "react-native";
import { useState } from "react";

export function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function handleClick() {
    addTask(newTask);
    setNewTask('');
  }

  return (
    <>
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
        onPress={handleClick}
        disabled={!newTask} />
    </>
  )
}
