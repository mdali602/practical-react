import React from 'react';

export class MyForm extends React.Component {

  state = {
    name: 'Ben',
    favoritePet: '',
    rememberMe: false,
    title: 'Miss.'
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const isCheckbox = event.target.type === "checkbox" ? true : false;
    this.setState({
      // name: event.target.value
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value 
    });
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    console.log(this.state);
    /* this.setState({
      title: event.target.value
    }); */
  }

  render() {
    return (
      <form onClick={ this.handleSubmit }>
        <input
          type="text"
          name="name"
          value={ this.state.name }
          onChange={ this.handleChange }
        />{/*  onChange={ event => { this.handleChange(event, 'name', false) } } */}
        
        <textarea
          name="favoritePet"
          value={ this.state.favoritePet }
          onChange={ this.handleChange } >
        </textarea>
        
        <input
          type="checkbox"
          name="rememberMe"
          checked={ this.state.rememberMe }
          onChange={ this.handleChange }
        />

        <div>
          <select
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="Submit"> Submit </button>
      </form>
    );
  }
}