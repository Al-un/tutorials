import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import TodoList from "../components/TodoList";
import { RootState } from "../../store/types";
import { Todo } from "../todos.models";
import { loadTodos, deleteTodo } from "../todos.duck";

interface TodosContainerStateProps {
  todos: Todo[];
}
interface TodosContainerActionProps {
  loadTodos: () => void;
  deleteTodo: (id: number) => void;
}

class TodosContainer extends React.Component<
  TodosContainerStateProps & TodosContainerActionProps,
  {}
> {
  public componentWillMount(): void {
    this.props.loadTodos();
  }

  public render(): JSX.Element {
    return (
      <TodoList todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
    );
  }
}

const mapStateToProps = (state: RootState): TodosContainerStateProps => ({
  todos: state.todos.list
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): TodosContainerActionProps => {
  return {
    loadTodos: async () => await dispatch(loadTodos()),
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
  };
};

const ConnectedTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
export default ConnectedTodosContainer;
