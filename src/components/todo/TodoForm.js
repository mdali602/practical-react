import React from 'react';
import shortid from 'shortid';

export class TodoForm extends React.Component {

  state = {
    name: "",
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      complete: false
    });
    this.setState({ name: "" });
    console.log(this.state.name, "TTTTT");
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="name" value={ this.state.name} placeholder="todo..." onChange={ this.handleChange } />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}