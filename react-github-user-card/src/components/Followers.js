import React, { Component } from 'react'

export default class Followers extends Component {
  render() {
    return (
      <div>
        {this.props.followers && this.props.followers.map(flwr => {
          return(
            <div key={flwr.id}>
              <p>{flwr.login}</p>
              <img src={flwr.avatar_url} alt={flwr.name} />
            </div>
          )
        })}
      </div>
    )
  }
}
