import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Todo } from "../lib/todos.models";
import * as api from "../services/todos.api";

// ------------ Actions
export const LOAD = "todos/list_load";
export const LOADED = "todos/list_loaded";
export const ADD = "todos/add";
export const ADDED = "todos/added";
export const DELETE = "todos/delete";
export const DELETED = "todos/deleted";

// ------------ Store type
export interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: []
};

// ------------ Actions creator types
export interface TodoLoadedAction {
  type: typeof LOADED;
  payload: Todo[];
}

export interface TodoAddedAction {
  type: typeof ADDED;
  payload: Todo;
}

export interface TodoDeletedAction {
  type: typeof DELETED;
  payload: number;
}

export type TodoActionTypes =
  | TodoLoadedAction
  | TodoAddedAction
  | TodoDeletedAction;

// ------------ Reducer
const reducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case LOADED:
      return { ...state, list: action.payload };
    case ADDED:
      return { ...state, list: [...state.list, action.payload] };
    case DELETED:
      const updatedList = state.list.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        list: updatedList
      };
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
  const todos: Todo[] = await api.getTodos();

  dispatch(todoLoaded(todos));
};

export const addTodo = (
  todo: Todo
): ThunkAction<void, TodoState, null, Action<string>> => async dispatch => {
  const newTodo = await api.postTodo(todo);
  dispatch(addedTodo(newTodo));
};

export const deleteTodo = (
  id: number
): ThunkAction<void, TodoState, null, Action<string>> => async dispatch => {
  await api.deleteTodo(id);
  dispatch(deletedTodo(id));
};

export const todoLoaded = (todos: Todo[]): TodoLoadedAction => ({
  type: LOADED,
  payload: todos
});

export const addedTodo = (todo: Todo): TodoAddedAction => ({
  type: ADDED,
  payload: todo
});

export const deletedTodo = (id: number): TodoDeletedAction => ({
  type: DELETED,
  payload: id
});
