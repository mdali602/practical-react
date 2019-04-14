import React from 'react';
import logo from '../logo.svg';

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> { this.props.title } </h1>
        <div> Num: { this.props.num } </div>
        <div> Arr: { this.props.myArr } </div>
        <div> Arr[0]: { this.props.myArr[0] } </div>
        <div> Func: { this.props.myFunc(12, 10) } </div>
        <div> Obj: { JSON.stringify(this.props.myObj) } </div>
        <div> Obj.prop: { this.props.myObj.a } </div>
        <div> Obj[prop]: { this.props.myObj['b'] } </div>
      </header>
    );
  }
}

// export default Header;