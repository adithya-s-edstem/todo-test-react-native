import { useSelector } from 'react-redux';
import { View, Text } from "react-native";
import { selectTodo } from '../redux/selectors';
import { TaskItem } from './TaskItem';

export function TasksList() {
  const todoList = useSelector(selectTodo);

  function countUndone(arr) {
    return arr.reduce((count, item) => {
      if (!item.status) count += 1;
      return count;
    }, 0);
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Tasks: {countUndone(todoList)} pending
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 8,
        }}
      >
        {todoList?.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
    </View>
  )
}
