import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        receiveTodo={ receiveTodo }
        removeTodo={ removeTodo }/>
    )
  );
    return(
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={receiveTodo} length={todos.length}/>
      </div>
    );
  }
}

export default TodoList;
// module.exports = () => <h3>Todo List goes here!</h3>;

//
//   console.log(todo.map((todo) => todo));
//   return (
//   <div>
//     <ul>
//       { something }
//     </ul>
//   </div>
//   );
// )};
