import React, { Component } from 'react'
import Followers from './Followers'

export default class UserCard extends Component {
  render() {
    return (
      <div className="userCard">
        <img src={this.props.user.avatar_url} alt={this.props.user.name} />
        <h1>{this.props.user.name}</h1>
        <h2>{this.props.user.login}</h2>
        <h2>{this.props.user.location}</h2>
        <Followers 
          followers={this.props.followers} 
          getFollowers={this.props.getFollowers}
        />
      </div>
    )
  }
}
