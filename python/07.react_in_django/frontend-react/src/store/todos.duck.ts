import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Todo } from "../lib/todos.models";
import { getTodos } from "../services/todos.api";

// ------------ Actions
export const LOAD = "todos/list_load";
export const LOADED = "todos/list_loaded";
export const ADD = "todos/add";
export const DELETE = "todos/delete";

// ------------ Store type
export interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: []
};

// ------------ Actions creator types
export interface TodoListAction {
  type: typeof LOADED;
  payload: Todo[];
}

export interface TodoAddAction {
  type: typeof ADD;
  payload: Todo;
}

export interface TodoDeleteAction {
  type: typeof DELETE;
  payload: number;
}

export type TodoActionTypes = TodoListAction | TodoAddAction | TodoDeleteAction;

// ------------ Reducer
const reducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case LOADED:
      return { ...state, list: action.payload };
    case ADD:
    case DELETE:
    default:
      return state;
  }
};
export default reducer;

// ------------ Actions creator

export const loadTodos = (): ThunkAction<
  void,
  TodoState,
  null,
  Action<string>
> => async dispatch => {
  const todos: Todo[] = await getTodos();

  dispatch(todoLoaded(todos));
};

export const todoLoaded = (todos: Todo[]): TodoListAction => ({
  type: LOADED,
  payload: todos
});

export const addTodo = (todo: Todo): TodoAddAction => ({
  type: ADD,
  payload: todo
});

export const deleteTodo = (id: number): TodoDeleteAction => ({
  type: DELETE,
  payload: id
});
