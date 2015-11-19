import React from 'react';

import Repo from './repo';

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    // this.handleUpdate = this.handleUpdate.bind(this);
  }

  // handleUpdate() {
  //   console.log('called handle update!');
  // }

  render() {
    if (!this.props.repos.length && !this.props.hasLoaded) {
      return <div>Loading...</div>
    }

    let repos = this.props.repos.map(repo => {
        return <Repo key={repo.name} repo={repo}/>
    });

    return (
      <ul>
        {repos}
      </ul>
    )
  }
}

export default RepoList;
