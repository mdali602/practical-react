import React from 'react';
// import logo from '../logo.svg';

export const Body = (props) =>  (
  <div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <p className="App-intro"> { props.text } </p>
    <p className="App-intro"> { props.text2 } </p>
    <p className="App-intro"> { props.myFunc(32, 53) } </p>
  </div>
);
export const Body2 = () =>  (
  <div>
    <div> Hi </div>
  </div>
);

// export default Body;



/* const Body = () => {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload
    </p>
  )
} */

/* const Body = function () {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload
    </p>
  )
} */
