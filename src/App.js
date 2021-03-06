import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
// import { Body, Body2 } from './components/Body';
import { Counter } from './components/Counter';
import ImageSlider from './components/ImageSlider';
import { MyForm } from './components/MyForm';
import { ValidationForm } from './components/ValidationForm';
import { FetchRandomUser } from './components/FetchRandomUser';
import { TodoList } from './components/todo/TodoList';
// import Body from './components/Body';

class App extends Component {
  state = {
    visible: true,
    count: 0,
    // whichComponentToShow: "Counter"
    // whichComponentToShow: "ImageSlider"
    // whichComponentToShow: "Header"
    // whichComponentToShow: "MyForm"
    // whichComponentToShow: "ValidationForm"
    whichComponentToShow: "FetchRandomUser"
    // whichComponentToShow: "TodoList"
  };

  /* add(a, b) {
    return a + b;
  } */

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
    if(this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button onClick={ () => this.setState({ whichComponentToShow: "Counter" }) }>
            Show Counter
          </button>
        </div>
      );
    } else if(this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          {/* <div style={this.state.visible ? {} : { display: 'none' } }> */}
          <div className={ this.state.visible ? 'visible' : 'hidden' }>
            <Counter count={this.state.count} increament={this.increament} decreament={this.decreament} />
            <Counter count={this.state.count} increament={this.increament} decreament={this.decreament} />
          </div>
          <button onClick={ () => this.setState({ whichComponentToShow: "ImageSlider" }) }>
            Show Header
          </button> <br />
          <button onClick={ () => this.setState({ visible: !this.state.visible }) }>
            { this.state.visible ? 'Hide' : 'Show' } It!
          </button>
        </div>
      );
    } else if(this.state.whichComponentToShow === "Header") {
      return (
        <div className="App">
          <Header
            title={"Hello from Application"}
            num={4}
            myArr={[1,2,3]}
            // myFunc={add}
            myFunc={(a, b) => a + b }
            // myFunc={this.add}
            myObj={{
              a: 5,
              b: 6
            }}
          />
        </div>
      );
    } else if (this.state.whichComponentToShow === "MyForm") {
      return (
        <div className="App">
          <MyForm />
        </div>
      );
    } else if (this.state.whichComponentToShow === "ValidationForm") {
      return (
        <div className="App">
          <ValidationForm />
        </div>
      );
    } else if (this.state.whichComponentToShow === "FetchRandomUser") {
      return (
        <div className="App">
          <FetchRandomUser />
        </div>
      );
    } else if (this.state.whichComponentToShow === "TodoList") {
      return (
        <div className="App">
          <TodoList />
        </div>
      );
    }
    return null;
    /* // const add = (a, b) => a + b;
    const buttonText = this.state.visible ? 'Hide #' : 'Show #';
    const slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={ 0 } />;
    return (
      <div className="App">
        <Header
          title={"Hello from Application"}
          num={4}
          myArr={[1,2,3]}
          // myFunc={add}
          // myFunc={(a, b) => a + b }
          myFunc={this.add}
          myObj={{
            a: 5,
            b: 6
          }} />
        <ImageSlider />
        <br />
        <br />
        <br />
        <br />
        { slider }
        <button onClick={ () => { this.setState( { visible: !this.state.visible } )} }>
          { buttonText }
        </button>
        <Body text="I'm cool." text2="I'm cool2." myFunc={(a, b) => a + b } />
        <Body2 />
        <Counter initialCount={ 10 } />
      </div>
    ); */
  }
}

export default App;
/*
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
*/