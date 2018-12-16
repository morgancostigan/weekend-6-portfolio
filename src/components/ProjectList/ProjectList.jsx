import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddForm from '../AddForm/AddForm';

class ProjectList extends Component {
    render() {
        return (
            <div>
                <h3>Project List</h3>
                <br/>
                <a href="https://github.com/morgancostigan" target="_blank">GitHub profile</a>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(ProjectList);