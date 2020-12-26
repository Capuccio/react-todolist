const ADD = "todolist/add";
const DONE = "todolist/done";
const DELETE = "todolist/delete";

const initialState = [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let newData = [...state, action.payload];
      return newData;
    case DONE:
      let tasksDone = [...state];
      let task = tasksDone[action.payload.index];

      task.done = action.payload.checked;
      tasksDone[action.payload.index] = task;
      return tasksDone;
    case DELETE:
      let taskDelete = [...state];
      taskDelete[action.payload].done = false;
      taskDelete.splice(action.payload, 1);
      return taskDelete;
    default:
      return state;
  }
};

export const addTask = (data) => {
  return {
    type: ADD,
    payload: data
  };
};

export const doneTask = (index, checked) => {
  return {
    type: DONE,
    payload: { index, checked }
  };
};

export const deleteTask = (index) => {
  return {
    type: DELETE,
    payload: index
  };
};

export default tasks;
