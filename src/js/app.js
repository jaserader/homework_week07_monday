import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import RepoList from './repo_list';
import Repo from './repo';
import User from './user';


class App extends React.Component {
  constructor(props) {
    // do all the stuff that our react.component's constructor would
    // normally do.
    super(props);

    this.state = {
        hasLoaded: false,
        repos: [],
        user: []
      };
    }

  handleAdd(task) {
    let repos = this.state.repos;
    repos.unshift(task);

    let user = this.state.user;
    user.unshift(task);

    this.setState({
      repos: repos
    });

    this.setState({
      user: user
    });
  }

  componentDidMount() {
    this.getRepos();
    this.getUser();
  }

  getRepos(){
    jQuery.ajax('https://api.github.com/users/jaserader/repos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              repos: response
            });
          });
  }

  getUser(){
    jQuery.ajax('https://api.github.com/users/jaserader')
        .then( response => {
          this.setState({
            hasLoaded: true,
            user: response
          });
        });
  }

  render() {
    return(
      <div>
      <RepoList repos={this.state.repos}/>
      <User user={this.state.user}/>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
