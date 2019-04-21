import React from 'react';
import { TodoForm } from './TodoForm';
import Todo from './Todo';

export class TodoList extends React.Component {

  state = {
    todos: [],
    todoToShow: 'all'
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }

  handleToggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) todo.complete = !todo.complete;
        return todo;
      })
    });
  }

  handleUpdateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    });
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  removeAllCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  }

  render() {
    let todos = [];

    if(this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if(this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if(this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete)
    }

    return (
      <div>
        <TodoForm onSubmit={ this.addTodo } />
        {
          this.state.todos.length > 0 ?
          <div>
            {todos.map(todo => (
              // <div key={todo.id }>{ todo.name }</div>
              <Todo
                key={ todo.id }
                todo={ todo }
                toggleComplete={ () => this.handleToggleComplete(todo.id) }
                deleteTodo={ () => this.handleDeleteTodo(todo.id) }
              />
            )) }
            <br /><br /><br />
            <div> Todo Left: { this.state.todos.filter(todo => !todo.complete ).length } </div>
            <div> Todo Completed: { this.state.todos.filter(todo => todo.complete ).length } </div>
            <div> Total Todos: { this.state.todos.length } </div>
            <button style={{ background: this.state.todoToShow === 'all' ? '#00ff00' : ''}} onClick={ () => this.handleUpdateTodoToShow('all') }> All </button>
            <button style={{ background: this.state.todoToShow === 'active' ? '#00ff00' : ''}} onClick={ () => this.handleUpdateTodoToShow('active') }> Active </button>
            <button style={{ background: this.state.todoToShow === 'complete' ? '#00ff00' : ''}} onClick={ () => this.handleUpdateTodoToShow('complete') }> Complete </button>
            <div>
              {
                this.state.todos.some(todo => todo.complete ) ?
                <button onClick={ this.removeAllCompleted }> Remove All Completed</button> : ''
              }
            </div>
          </div>

          :
          (<div>No Item</div>)

        }
      </div>
    );
  }
}