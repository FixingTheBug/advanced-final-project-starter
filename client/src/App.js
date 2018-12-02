import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
//import SignUpSignIn from './SignUpSignIn';
//import TopNavbar from './TopNavbar';
import Secret from './Secret';
import {Rnd} from "react-rnd";
import ListOfItemsContainer from "./containers/ListOfItemsContainer";
import PlusIconContainer from "./containers/PlusIconContainer";
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    console.log(React.version);
  }

  componentDidMount() {
        this.props.loadItems();
    }

  render() {
    return (
      <div>
        <PlusIconContainer />
        <ListOfItemsContainer />
      </div>
    );
  }
}

export default App;
