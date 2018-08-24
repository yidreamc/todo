import React from 'react';
import { connect } from 'dva';
import Filter from '../components/filter'
import AddTodo from '../components/addTodo'
import List from '../components/list'


const Todo = ({
  dispatch, todo
}) => {
  const { list, currentItem } = todo.todo
  const addTodoProps = {
    changeInput(value) {
      dispatch({
        type: 'todo/update',
        payload: {
          currentItem: {
            text: value
          }
        }
      })
    },
    submit() {
      dispatch({
        type: 'todo/submit'
      })
    }
  };

  const listProps = {
    list,
  }

  return (
    <div>
      <Filter />
      <AddTodo {...addTodoProps} />
      <List {...listProps} />
    </div>
  );
}

export default connect((todo) => ({
  todo,
}))(Todo);
