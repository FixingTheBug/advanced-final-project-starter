import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
//import SignUpSignIn from './SignUpSignIn';
//import TopNavbar from './TopNavbar';
import Secret from './Secret';
import WrapperContainer from "./containers/WrapperContainer";
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
        this.props.loadItems();
    }

  render() {
    return (
      <div>
        <WrapperContainer />
      </div>
    );
  }
}

export default App;
