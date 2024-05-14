import { useDispatch } from 'react-redux';
import { Text, Pressable } from "react-native";
import { toggleTask } from '../redux/slices';

export function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <Pressable
      key={task.id}
      onPress={() => dispatch(toggleTask(task.id))}
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
