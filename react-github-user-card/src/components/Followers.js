import React, { Component } from 'react'

export default class Followers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    console.log(props)
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.props.getFollowers()
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {this.state.isOpen === false ? 'Show Followers' : 'Hide Followers'}
        </button>
        {this.props.followers && this.state.isOpen === true && this.props.followers.map(flwr => {
          return(
            <a href={flwr.html_url} target="_blank" rel="noopener noreferrer" key={flwr.id}>
              <div className="followerCard">
                <img src={flwr.avatar_url} alt={flwr.name} />
                <p>{flwr.login}</p>
              </div>
            </a>
          )
        })}
      </div>
    )
  }
}
