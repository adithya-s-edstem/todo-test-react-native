import { View, Text, Pressable } from "react-native";

export function TasksList({ tasksList, toggleTask }) {
  function countUndone(arr) {
    let count = 0;
    if (arr.length > 0) {
      arr.map((item) => {
        if (!item.status) count += 1
      })
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
        {tasksList?.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </View>
    </View>
  )
}

function TaskItem({ task, toggleTask }) {
  return (
    <Pressable
      key={task.id}
      onPress={() => toggleTask(task.id)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        padding: 12,
        borderColor: task.status ? '#eee' : '#000',
        borderRadius: 8,
        justifyContent: 'space-between',
        backgroundColor: task.status ? '#eee' : '#fff'
      }}
    >
      <Text style={{ color: task.status ? '#ccc' : '#000' }}>
        {task.taskName}
      </Text>
      {task.status &&
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