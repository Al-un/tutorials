import React from "react";
import { connect } from "react-redux";
import {  ThunkDispatch } from "redux-thunk";

import TodoList from "../components/TodoList";
import { RootState } from "../store/types";
import { Todo } from "../lib/todos.models";
import {  loadTodos } from "../store/todos.duck";

interface TodosContainerProps {
  todos: Todo[];
  loadTodos: () => any;
}

class TodosContainer extends React.Component<TodosContainerProps, any> {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return <TodoList todos={this.props.todos} />;
  }
}

const mapStateToProps = (state: RootState) => ({ todos: state.todos.list });

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    loadTodos: async () => await dispatch(loadTodos())
  };
};

const ConnectedTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
export default ConnectedTodosContainer;
