import { Todo } from "./todos.models";
// import axios from "axios";

// const API_URL = process.env.API_URL || "http://localhost:8000/api";

let todoId = 1;

export const getTodos = async (): Promise<Todo[]> => {
  return new Promise<Todo[]>((resolve, reject) =>
    resolve([{ id: 0, text: "Make it work", done: false }])
  );
};

export const postTodo = async (todo: Todo): Promise<Todo> => {
  todo.id = todoId;
  todoId++;

  // todo.id = "some invalid text"
  console.log("creating", todo);

  return new Promise<Todo>((resolve, reject) => resolve(todo));
};

export const deleteTodo = async (id: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => resolve());
};

// export const getTodos = async (): Promise<Todo[]> => {
//   const response = await axios.get(API_URL + "/todos/");
//   const todos: Todo[] = response.data;
//   console.log("Fetched TODO:", todos);
//   return todos;
// };

// export const postTodo = async (todo: Todo): Promise<Todo> => {
//   const resp = await axios.post(API_URL + "/todos/", todo);
//   const newTodo = resp.data;
//   console.log("Created TODO:", newTodo);
//   return newTodo;
// };

// export const deleteTodo = async (id: number): Promise<void> => {
//   await axios.delete(`${API_URL}/todos/${id}/`);
// };
