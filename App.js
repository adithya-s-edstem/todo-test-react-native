import { View, Text, TextInput, Button, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
const App = () => {
  const [tasksList, setTasksList] = useState({});
  const [newTask, setNewTask] = useState('');

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
    setNewTask('');
  }

  function toggleTask(taskId) {
    const newTasksList = { ...tasksList };
    newTasksList[taskId].status = !tasksList[taskId].status;
    setTasksList(newTasksList);
  }

  function getObjCount(obj) {
    if (!Object.keys(obj)) return 0;
    return Object.keys(obj).length;
  }

  function countUndone(obj) {
    let count = 0;
    if (getObjCount(obj) > 0) {
      Object.values(tasksList).map((task) => {
        if (!task.status) count += 1
      });
    }
    return count;
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
          //Top
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
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
            }}
          />
          <Button
            title="Add task"
            onPress={() => addTask(newTask)}
            disabled={!newTask}
          />
          <Button
            onPress={() => setTasksList({})}
            title="Clear All"
            color='#333'
            disabled={!getObjCount(tasksList)}
          />
        </View>
        <View
          // Bottom
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 50
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Tasks: {countUndone(tasksList)} pending
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              padding: 8,
            }}
          >
            {tasksList && Object.entries(tasksList).map((taskArray) => (
              <Pressable
                key={taskArray[0]}
                onPress={() => toggleTask(taskArray[0])}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1.5,
                  padding: 12,
                  borderColor: taskArray[1].status ? '#eee' : '#000',
                  borderRadius: 8,
                  justifyContent: 'space-between',
                  backgroundColor: taskArray[1].status ? '#eee' : '#fff'
                }}
              >
                <Text style={{ color: taskArray[1].status ? '#ccc' : '#000' }}>
                  {taskArray[1].taskName}
                </Text>
                {taskArray[1].status &&
                  <Text
                    style={{
                      fontSize: 8,
                      textTransform: "uppercase",
                      fontWeight: 'bold',
                      color: '#000'
                    }}
                  >
                    &#10003; completed
                  </Text>
                }
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </>
  )
}

export default App;
