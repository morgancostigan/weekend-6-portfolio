import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//import components
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectList from '../ProjectList/ProjectList';
import AddForm from '../AddForm/AddForm';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Empty Page</p>
          <br/>
          <Route path="/" exact component={ProjectList} />
          <Route path="/Admin" exact component={AddForm} /> 
        </div>
      </Router >
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
