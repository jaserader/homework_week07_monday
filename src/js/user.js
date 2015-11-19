import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

class User extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      userName: this.props.user.name
    };
  }

  render (){
    return(
      <div className='User'>
        <img src={this.props.user.avatar_url}/>
        <span>{this.props.user.name}</span>
        <span>{this.props.user.login}</span>
        <span>{this.props.user.location}</span>
        <span>{this.props.user.created_at}</span>
        <a href="#">{this.props.user.followers}</a>
        <a href="#">{this.props.user.following}</a>
        <a href="#">{this.props.user.organizations_url}</a>
      </div>
    );
  }
};

export default User;
