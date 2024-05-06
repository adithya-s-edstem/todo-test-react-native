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
    const tmpId = Object.keys(tasksList) ? Object.keys(tasksList).length + 1 : 0;
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
    return Object.keys(obj).length;
  }

  function getTaskStats(tasksList) {
    return getObjCount(tasksList);
  }

  return (
    <>
      <View
        style={{
          marginTop: 30,
          marginLeft: 8,
          marginRight: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <StatusBar style="auto" />
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
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
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <Text
            style={{ fontSize: 24, fontWeight: 'bold' }}
          >
            Tasks: {getTaskStats(tasksList)}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
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
                  borderWidth: 1,
                  padding: 12,
                  borderColor: '#ccc',
                  justifyContent: 'space-between',
                  borderRadius: 8
                }}
              >
                <Text
                  style={{
                    color: taskArray[1].status ? '#ccc' : '#000'
                  }}
                >
                  {taskArray[1].taskName}
                </Text>
                {taskArray[1].status &&
                  <Text
                    style={{
                      fontSize: 8,
                      textTransform: "uppercase",
                      fontWeight: 'bold'
                    }}
                  >
                    &#9989; completed
                  </Text>
                }
              </Pressable>
            ))}
          </View>
          <View>
            <Button
              onPress={() => setTasksList({})}
              title="Clear All"
              color='red'
              disabled={!getObjCount(tasksList)}
            />
          </View>
        </View>
      </View>
    </>
  )
}

export default App;
