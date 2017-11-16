import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import TeamPage from './components/Teams/TeamPage'
import NavBar from './components/NavBar'
import TeamNavBar from './components/TeamNavBar'

class App extends Component {

  state = {
    teams: [],
    team: {},
    redirectToTeamPage: false,
    homePage: true
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
      await this.setState({ team: response.data })
      await this.setRedirectToTeamPage()
      await this.setHomePageNavBar()
    } catch (err) {
      console.log(err)
    }
  }

  setHomePageNavBar = async () => {
    await this.setState({ 
      redirectToTeamPage: !this.state.setRedirectToTeamPage,
      homePage: !this.state.homePage,
     })
  }

  setRedirectToTeamPage = async () => {
    await this.setState({ redirectToTeamPage: !this.state.redirectToTeamPage })
  }

  render() {
    const HomePageComponent = () => (<HomePage getSingleTeam={this.getSingleTeam} teams={this.state.teams} />)
    const TeamPageComponent = () => (<TeamPage team={this.state.team} />)
    return (
      <Router>
        <div>
          {this.state.homePage ? <NavBar /> : <TeamNavBar setHomePageNavBar={this.setHomePageNavBar} team={this.state.team} />}
          {this.state.redirectToTeamPage ? <Redirect to={`/${this.state.team.id}`} /> : <Redirect to={`/`} />}
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
