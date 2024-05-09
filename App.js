import { View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";
import { getObjCount } from "./utils/getObjCount";

export default function App() {
  const [tasksList, setTasksList] = useState({});

  class Task {
    constructor(taskName) {
      this.taskName = taskName;
      this.status = false;
    }
  }

  function addTask(task) {
    const tmpId = getObjCount(tasksList);
    const tmpTask = new Task(task, tasksList.length + 1)
    setTasksList({ ...tasksList, [tmpId]: tmpTask });
  }

  function clearTasks() {
    setTasksList({});
  }

  function toggleTask(taskId) {
    const newTasksList = { ...tasksList };
    newTasksList[taskId].status = !tasksList[taskId].status;
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
            disabled={!getObjCount(tasksList)}
          />
        </View>
        <TasksList tasksList={tasksList} toggleTask={toggleTask} />
      </View>
    </>
  )
}
