import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import TeamPage from './components/Teams/TeamPage'
import NavBar from './components/NavBar'

import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"

class App extends Component {

  state = {
    teams: [],
  }

  async componentWillMount() {
    try {
      await this.getAllTeams()
    } catch (error) {
      console.log(error)
    }
  }

  getAllTeams = async () => {
    try {
      const response = await axios.get(`/api/teams`)
      this.setState({ teams: response.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const HomePageComponent = () => (<HomePage teams={this.state.teams} />)
    const NavBarComponent = () => (<NavBar teams={this.state.teams} />)
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' render={HomePageComponent} />
            <Route exact path='/:team_id' component={TeamPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
