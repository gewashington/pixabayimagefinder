import React, { Component } from 'react';
//You need this to style the navbar. You have to specify the style when
//using material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  Navbar  from './components/navbar/Navbar';
import  Search  from './components/search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
