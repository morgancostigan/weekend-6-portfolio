import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';

const newProject = {
    title: '',
    desc: '',
    thumb: '',
    url: '',
    github: '',
    date: '',
    tag: 0
}


class AddForm extends Component{

    state = newProject;

    handleChange = (event) => {
        this.setState({

                [event.target.name]: event.target.value,
            
        });
    }

    addNewProject = event => {
        console.log('sending', this.state);
        
        // event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
        this.setState({

        });
    }

    render() {
        return(
            <div>
                <h3>Admin</h3>
                <div onSubmit={this.addNewProject}>
                    <br/><input type='text' name='title' placeholder='Project Name' value={this.state.title} onChange={this.handleChange} />
                    <br/><input type='text' name='desc' placeholder='Description' value={this.state.desc} onChange={this.handleChange} />
                    <br/><input type='text' name='thumb' placeholder='Thumbnail URL' value={this.state.thumb} onChange={this.handleChange} />
                    <br/><input type='text' name='url' placeholder='Website' value={this.state.url} onChange={this.handleChange} />
                    <br/><input type='text' name='github' placeholder='Github URL' value={this.state.github} onChange={this.handleChange} />
                    <br/><input type='date' name='date' placeholder='Completion Date' value={this.state.date} onChange={this.handleChange} />
                    <br/>
                    <select name='tag' onChange={this.handleChange}>
                        <option value={1} defaultValue>React</option>
                        <option value={2}>jQuery</option>
                        <option value={3}>Node</option>
                        <option value={4}>SQL</option>
                        <option value={5}>Redux</option>
                        <option value={6}>HTML</option>


                    </select>
                    <br/>
                    
                    <button onClick={this.addNewProject}>Add New Project</button>
                </div>
                <br/>






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