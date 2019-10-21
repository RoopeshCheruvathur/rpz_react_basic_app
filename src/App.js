import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '',
                  lastname: '',
                  age: '',
                  designation: '',
                  };
  }
  changeFirstname = (event) => {
    this.setState({firstname: event.target.value});
  }
  changeLastname = (event) => {
    this.setState({lastname: event.target.value});
  }
  changeAge = (event) => {
    this.setState({age: event.target.value});
  }
  changeDesignation = (event) => {
    this.setState({designation: event.target.value});
  }
  render() {
    return (
      <div>
      <form>

      <p>First name:</p>
      <input
        type='text'
        onChange={this.changeFirstname}
      />
      <p>Last name:</p>
      <input
        type='text'
        onChange={this.changeLastname}
      />
      <p>Age:</p>
      <input
        type='text'
        onChange={this.changeAge}
      />
      <p>Designation:</p>
      <input
        type='text'
        onChange={this.changeDesignation}
      />

      </form>

      <div>
        <h3>First Name : {this.state.firstname}</h3>
        <h3>Last Name : {this.state.lastname}</h3>
        <h3>Age : {this.state.age}</h3>
        <h3>Designation : {this.state.designation}</h3>
        </div>
      </div>
      

    );
  }
}

export default App;
