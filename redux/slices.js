import 'react-native-get-random-values';
import { combineSlices, createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        [v4()]: { taskName: action.payload, status: false }
      };
    },
    toggleTask: (state, action) => {
      state[action.payload].status = !state[action.payload].status;
    },
    clearAllTasks: () => {
      return {};
    }
  }
})

export const {
  addTask,
  toggleTask,
  clearAllTasks
} = todoSlice.actions;

export const todoReducer = combineSlices({
  todo: todoSlice.reducer
});
