import React from 'react';
import UserCard from './components/UserCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/clifhodges13')
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res })
      })
      .catch(err => console.log(err))
    
    fetch('https://api.github.com/users/clifhodges13/followers')
      .then(res => res.json())
      .then(res => {
        this.setState({ followers: res })
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <UserCard 
        user={this.state.user}
        followers={this.state.followers}
      />
    )
  }
}

export default App;
