import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';

class AddForm extends Component{
    render() {
        return(
            <div>
                <h3>Admin</h3>
                <Link to="/"><button onClick={this.handleClick}>Portfolio</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(AddForm);