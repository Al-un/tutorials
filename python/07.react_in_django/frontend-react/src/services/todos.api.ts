import { Todo } from "../lib/todos.models";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8000/api/";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL + "todos/");
  console.log("Response", response);
  const todos: Todo[] = response.data;
  console.log("Data", todos);
  return todos;
  // return Promise.resolve([{ id: 1, text: "plop", done: false }]);
};
