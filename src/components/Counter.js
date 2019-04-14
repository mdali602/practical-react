import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialCount
    };
  }

  increament = () => {
    // this.state.count += 1;
    this.setState({
      count: this.state.count + 1
    });
  };

  decreament = () => {
    // this.state.count += 1;
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("render function called")
    return (
      <div>
        <div> Count: { this.state.count } </div>
        <button onClick={ this.increament }> increament </button>
        <button onClick={ this.decreament }> decreament </button>
      </div>
    );
  }
}