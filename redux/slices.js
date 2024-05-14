import { combineSlices, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        { id: state.length + 1, status: false, taskName: action.payload }
      ];
    },
    toggleTask: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      state[taskIndex].status = !state[taskIndex].status;
    },
    clearAllTasks: () => {
      return [];
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
