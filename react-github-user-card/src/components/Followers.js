import React, { Component } from 'react'

export default class Followers extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isOpen === false ? 'Show Followers' : 'Hide Followers'}
        </button>
        {this.props.followers && this.state.isOpen === true && this.props.followers.map(flwr => {
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
