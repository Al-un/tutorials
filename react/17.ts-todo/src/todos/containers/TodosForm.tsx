import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import TodoForm from "../components/TodoForm";
import { Todo } from "../todos.models";
import { addTodo } from "../todos.duck";

interface Props {
  saveTodo: (todo: Todo) => void;
}

class TodoFormContainer extends React.Component<Props, any> {
  public render(): JSX.Element {
    return <TodoForm saveTodo={this.props.saveTodo} />;
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Props => {
  return {
    saveTodo: async (todo: Todo) => await dispatch(addTodo(todo))
  };
};

const ConnectedTodoFormContainer = connect(
  null,
  mapDispatchToProps
)(TodoFormContainer);
export default ConnectedTodoFormContainer;
