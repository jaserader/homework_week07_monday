import React from 'react'
import jQuery from 'jquery';
// import React, { PropTypes } from 'react'

class Repo extends React.Component{
  constructor(props) {
    super(props);

    // this.handleCompleted = this.handleCompleted.bind(this);
    // this.handleDeleted = this.handleDeleted.bind(this);

    this.state = {
      hasLoaded: false,
      repo: []
    };

    this.state = {
    //   // completed: this.props.todo.completed,
      repoName: this.props.repo.name
    }
  }

  render (){
    return(
      <li className='Repo'>
        <h3>{this.props.repo.name}</h3>
        <a href="#">{this.props.repo.html_url}</a>
        <span>{this.props.repo.updated_at}</span>
        <span>{this.props.repo.language}</span>
        <a href="#">{this.props.repo.stargazers_count}</a>
        <a href="#">{this.props.repo.forks_count}</a>
      </li>
      )
    }
  };

Repo.defaultProps = {
  repo: {
    text: "",
    completed: false
  }
};

export default Repo;
