import React from 'react';

class todoListItem extends React.Component{
  constructor(props){
    super(props);
  }
  handleDelete(e){
    e.preventDefault();
    removeTodo()
  }
  render(){
    return (
      <div>
        <li>
          {this.props.todo.title}
        </li>
        <button onClick={this.handleDelete}>Delete Todo</button>
      </div>
    );
  }
}


//
// const todoListItem = ({todo}) => {
//   return (
    <div>
      <li>
        {todo.title}
      </li>
    </div>
//   );
// };

export default todoListItem;
