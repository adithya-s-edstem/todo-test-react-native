import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

export function Todo() {
  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}
      >
        <AddTask />
        <TasksList />
      </View>
    </View>
  )
}
