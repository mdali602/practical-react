import React from 'react';

export class MyForm extends React.Component {

  state = {
    name: 'Ben',
    favoritePet: '',
    rememberMe: false,
    title: 'Miss.'
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  handleChangeFavoritePet = (event) => {
    console.log(event.target.value);
    this.setState({
      favoritePet: event.target.value
    });
  }

  handleCheck = (event) => {
    console.log(event.target.value);
    this.setState({
      rememberMe: event.target.checked
    });
  }

  handleSelect = (event) => {
    console.log(event.target.value);
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit = () => {
    console.log(this.state);
    /* this.setState({
      title: event.target.value
    }); */
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.name } onChange={ this.handleChange } />
        <textarea value={ this.state.favoritePet } onChange={ this.handleChangeFavoritePet } ></textarea>
        <input
          type="checkbox"
          value={ this.state.rememberMe }
          checked={ this.state.rememberMe }
          onChange={ this.handleCheck }
        />
        <div>
          <select value={ this.state.title } onChange={ this.handleSelect }>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={ this.handleSubmit }> Submit </button>
      </div>
    );
  }
}