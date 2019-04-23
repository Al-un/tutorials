import React from "react";
import { Todo } from "../lib/todos.models";
import "./TodoList.css";

export interface TodoListProps {
  todos: Todo[];
}

export default class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const todoList = this.props.todos.map(todo => (
      <div className="todoListItem" key={todo.id}>
        <div className="status">{todo.done ? "Done" : "Todo"}</div>
        <div className="content">{todo.text}</div>
      </div>
    ));

    return <div>{todoList}</div>;
  }
}
