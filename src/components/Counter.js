import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props, "props");
    /* this.state = {
      count: 0
    }; */
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }


  componentDidMount() {
    console.log("mounting...");
  }

  render() {
    return (
      <div>
        <div> Count: { this.props.count } </div>
        <button onClick={ this.props.increament }> increament </button>
        <button onClick={ this.props.decreament }> decreament </button>
      </div>
    );
  }
}