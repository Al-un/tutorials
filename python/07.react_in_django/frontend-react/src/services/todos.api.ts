import { Todo } from "../lib/todos.models";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8000/api";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL + "/todos/");
  const todos: Todo[] = response.data;
  console.log("Fetched TODO:", todos);
  return todos;
};

export const postTodo = async (todo: Todo): Promise<Todo> => {
  const resp = await axios.post(API_URL + "/todos/", todo);
  const newTodo = resp.data;
  console.log("Created TODO:", newTodo);
  return newTodo;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/todos/${id}/`);
};
