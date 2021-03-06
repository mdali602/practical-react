import React from 'react';

export default props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        textDecoration: props.todo.complete ? 'line-through' : ''
      }}
      onClick={ props.toggleComplete }
    >
      { props.todo.name }

    </div>

    <button onClick={ props.deleteTodo }>X</button>
  </div>
)