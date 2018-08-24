import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import './App.css';
import Routes from './route'
import Nav from './component/Nav/Nav';


class App extends Component {
  
  render() {
    return (
      <HashRouter> 
       <div>
         <Nav/>
        </div> 
       <Routes/>
       </HashRouter>
    );
  }
}

export default App;

