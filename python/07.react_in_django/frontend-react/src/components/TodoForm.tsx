import React from "react";
import { Todo } from "../lib/todos.models";
import "./TodoForm.css";
import { Redirect } from "react-router";

export interface TodoFormProps {
  saveTodo: (todo: Todo) => void;
}

export interface TodoFormState {
  todo: Todo;
  done: boolean;
}

export default class TodoForm extends React.Component<
  TodoFormProps,
  TodoFormState
> {
  constructor(props: TodoFormProps) {
    super(props);

    const todo: Todo = {
      text: "",
      done: false
    };

    this.state = { todo, done: false };
  }

  /**
   * use `event.currentTarget` instead of `event.target`:
   * https://stackoverflow.com/a/42645711/4906586
   */
  private handleTodoChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      todo: {
        ...this.state.todo,
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  };

  private handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await this.props.saveTodo(this.state.todo);
    this.setState({ done: true });
  };

  public render() {
    return this.state.done ? (
      <Redirect to="/todos/" />
    ) : (
      <div className="todo-form">
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <span>Text</span>
            <input
              type="text"
              name="text"
              placeholder="What is your TODO?"
              required={true}
              value={this.state.todo.text}
              onChange={this.handleTodoChange}
            />
          </div>
          <div>
            <button type="submit">Save TODO</button>
          </div>
        </form>
      </div>
    );
  }
}
