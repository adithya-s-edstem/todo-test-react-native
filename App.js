import { View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

export default function App() {
  const [tasksList, setTasksList] = useState([]);

  class Task {
    constructor(id, taskName) {
      this.id = id;
      this.taskName = taskName;
      this.status = false;
    }
  }

  function addTask(taskName) {
    const newTaskId = tasksList.length + 1;
    const newTask = new Task(newTaskId + 1, taskName)
    setTasksList([...tasksList, newTask]);
  }

  function clearTasks() {
    setTasksList([]);
  }

  function toggleTask(taskId) {
    const taskIndex = tasksList.findIndex((task) => task.id === taskId);
    const newTasksList = [...tasksList];
    newTasksList[taskIndex].status = !tasksList[taskIndex].status;
    setTasksList(newTasksList);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View
        // main container
        style={{
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
          <AddTask addTask={addTask} />
          <Button
            onPress={clearTasks}
            title="Clear All"
            color="#333"
            disabled={!tasksList}
          />
        </View>
        <TasksList tasksList={tasksList} toggleTask={toggleTask} />
      </View>
    </>
  )
}
