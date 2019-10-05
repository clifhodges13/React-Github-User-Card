import React from 'react';
import UserCard from './components/UserCard';
import './index.css';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: [],
      search: ''
    }
  }

  // add a search bar that changes which user displays

  componentDidMount() {
    this.getUser('clifhodges13')
  }

  getUser = (searchInput) => {
    this.setState({ search: searchInput })
    fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res })
        console.log(this.state.user)
      })
      .catch(err => console.log(err))
    }

  getFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.search}/followers`)
      .then(res => res.json())
      .then(res => {
        this.setState({ followers: res })
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <h1>Github User: {this.state.user.login}</h1>
        <Search getUser={this.getUser} getFollowers={this.getFollowers} />
        <UserCard
          user={this.state.user}
          followers={this.state.followers}
          getFollowers={this.getFollowers}
        />
      </>
    )
  }
}

export default App;
