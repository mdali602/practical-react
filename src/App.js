import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
// import { Body, Body2 } from './components/Body';
import { Counter } from './components/Counter';
import ImageSlider from './components/ImageSlider';
import { MyForm } from './components/MyForm';
import { ValidationForm } from './components/ValidationForm';
// import Body from './components/Body';

class App extends Component {
  state = {
    visible: true,
    // whichComponentToShow: "ImageSlider"
    // whichComponentToShow: "MyForm"
    whichComponentToShow: "ValidationForm"
  };

  /* add(a, b) {
    return a + b;
  } */

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
          <div className={this.state.visible ? 'visible' : 'hidden' }>
            <Counter initialCount={ 0 } />
          </div>
          <button onClick={ () => this.setState({ whichComponentToShow: "ImageSlider" }) }>
            Show Header
          </button> <br />
          <button onClick={ () => this.setState({ visible: !this.state.visible }) }>
            {this.state.visible ? 'Hide' : 'Show' } It
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