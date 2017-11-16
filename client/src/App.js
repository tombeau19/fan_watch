import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import TeamPage from './components/Teams/TeamPage'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    teams: [],
    team: {},
    redirectToTeamPage: false
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

  getSingleTeam = async (id) => {
    try {
        const team_id = id
        const response = await axios.get(`/api/teams/${team_id}`)
        this.setState({
            team: response.data,
            redirectToTeamPage: true
        })
    } catch (err) {
        console.log(err)
    }
}

  render() {
    const HomePageComponent = () => (<HomePage getSingleTeam={this.getSingleTeam} teams={this.state.teams} />)
    const NavBarComponent = () => (<NavBar team={this.state.team} />)
    const TeamPageComponent = () => (<TeamPage team={this.state.team}/>)
    return (
      <Router>
        <div>
          <NavBar />
          {this.state.redirectToTeamPage ? <Redirect to={`/${this.state.team.id}`}/> : null}
          <Switch>
            <Route exact path='/' render={HomePageComponent} />
            <Route exact path='/:team_id' render={TeamPageComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
