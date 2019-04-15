import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};
export class ValidationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value 
    });
  }

  validate = () => {

    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if(!this.state.name) {
      nameError = "name cannot be blank";
    }

    if(!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if(emailError || nameError) {
      this.setState({ emailError, nameError });
      // this.setState({ emailError: emailError, nameError: nameError });
      return false
    }

    return true;
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state)
      // clear form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onClick={ this.handleSubmit }>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={ this.state.name }
            onChange={ this.handleChange }
          />
          <div style={{ color: 'red', fontSize: '12px' }}>
            { this.state.nameError }
          </div>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={ this.state.email }
            onChange={ this.handleChange }
          />
          <div style={{ color: 'red', fontSize: '12px' }}>
            { this.state.emailError }
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleChange }
          />
          <div style={{ color: 'red', fontSize: '12px' }}>
            { this.state.passwordError }
          </div>
        </div>
        
        <button type="Submit"> Submit </button>
      </form>
    );
  }
}