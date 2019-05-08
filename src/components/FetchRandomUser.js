import React from 'react';
import * as http from '../utils/http';
import * as myService from '../utils/http';

export class FetchRandomUser extends React.Component {

  state = {
    loading: true,
    person: null,
    users: []
  };

  getData = async () => {
    this.setState({ loading: true });
    const url = "https://api.randomuser.me/?results=5";
    var response = await fetch(url);
    var data = await response.json();

    this.setState({ loading: false });
    if (data.results && data.results.length > 0) {
      this.setState({
        person: data.results['0'],
        users: data.results.slice(1)
      });
    }

    var httpResponse = await http.get('?results=5');
    var httpData = await httpResponse.json();
		console.log("TCL: FetchRandomUser -> getData -> httpData", httpData)
    
    var apiResponse = await myService.get('?result=10');
    var apiData = await apiResponse.json();
		console.log("TCL: FetchRandomUser -> getData -> apiData", apiData)
  }
  /* getUsers = async () => {
    this.setState({ loading: true });
    const url = "https://api.randomuser.me/?results=5";
    var response = await fetch(url);
    var data = await response.json()
    this.setState({ loading: false });
    console.log("data: ", data);
    if (data.results && data.results.length > 0) {
      this.setState({
        person: data.results['0']
      });
    }
    console.log("person: ", this.state.person.name);
  } */

  componentDidMount() {  
    this.getData();
  }

  render() {
    if(this.state.loading) {
      return (<div> Loading... </div>);
    } else if (!this.state.person) {
      return (<div> User not Found </div>);
    } else {
      return (
        <div>
          <div> <img src={ this.state.person.picture.large } /> </div>
          <div> { this.state.person.name.title } { this.state.person.name.first } { this.state.person.name.last } </div>
          <div> <button onClick={ this.getData } alt="User" className="width-128"> Random User </button> </div>

          <br/><br/><br/>

          <div>
            {
              this.state.users.map((user, i) => {
                return (<div key={`user_${i}`}>
                  <div> <img src={ user.picture.large } /> </div>
                  <div> { user.name.title } { user.name.first } { user.name.last } </div>
                </div>);
              })
            }
          </div>
        </div>
      );
    }
    
  }
}