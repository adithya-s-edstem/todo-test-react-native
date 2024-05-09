import { View, Text, Pressable } from "react-native";
import { getObjCount } from "../utils/getObjCount";

export function TasksList({ tasksList, toggleTask }) {
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
    <View
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
          <TaskItem taskArray={taskArray} toggleTask={toggleTask} />
        ))}
      </View>
    </View>
  )
}

function TaskItem({ taskArray, toggleTask }) {
  return (
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
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#000'
          }}
        >
          &#10003; completed
        </Text>
      }
    </Pressable>
  )
}