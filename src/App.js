import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form';

class App extends Component {

  state = {
    fields: {}
  };


  onSubmit = fields => {
    this.setState({fields});

     axios.post('http://localhost:9000/testapi', {
        subject: fields.subject,
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        phone: fields.phone,
        message: fields.message
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });


  };




  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
