import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props, "props");
    this.state = {
      count: this.props.initialCount
    };
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }


  componentDidMount() {
    console.log("mounting...");
  }

  increament = () => {
    // this.state.count += 1;
    this.setState({
      count: this.state.count + 1
    });
    // this.props.initialCount += 1;
  };

  decreament = () => {
    // this.state.count += 1;
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div> Count: { this.state.count } </div>
        <button onClick={ this.increament }> increament #{ this.props.initialCount } </button>
        <button onClick={ this.decreament }> decreament </button>
      </div>
    );
  }
}