import React from "react";
import { Todo } from "../todos.models";
import "./TodoList.css";

export interface TodoListItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

class TodoListItem extends React.Component<TodoListItemProps, {}> {
  private handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    this.props.deleteTodo(this.props.todo.id);
  };

  public render(): JSX.Element {
    return (
      <div className="todoListItem">
        <div className="status">{this.props.todo.done ? "Done" : "Todo"}</div>
        <div className="content">
          {this.props.todo.id} : {this.props.todo.text}
        </div>
        <div className="status">
          <form onSubmit={this.handleFormSubmit}>
            <button>Delete</button>
          </form>
        </div>
      </div>
    );
  }
}

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default class TodoList extends React.Component<TodoListProps, {}> {
  public render(): JSX.Element {
    const todoList = this.props.todos.map(
      (todo: Todo): JSX.Element => (
        <TodoListItem
          todo={todo}
          deleteTodo={this.props.deleteTodo}
          key={todo.id}
        />
      )
    );

    return <div>{todoList}</div>;
  }
}
