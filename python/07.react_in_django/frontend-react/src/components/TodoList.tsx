import React from "react";
import { Todo } from "../lib/todos.models";
import "./TodoList.css";

export interface TodoListItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

class TodoListItem extends React.Component<any, any> {
  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.deleteTodo(this.props.todo.id);
  };

  render() {
    return (
      <div className="todoListItem">
        <div className="status">{this.props.todo.done ? "Done" : "Todo"}</div>
        <div className="status">
          <form onSubmit={this.handleFormSubmit}>
            <button>Delete</button>
          </form>
        </div>
        <div className="content">{this.props.todo.text}</div>
      </div>
    );
  }
}

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const todoList = this.props.todos.map(todo => (
      <TodoListItem
        todo={todo}
        deleteTodo={this.props.deleteTodo}
        key={todo.id}
      />
    ));

    return <div>{todoList}</div>;
  }
}
