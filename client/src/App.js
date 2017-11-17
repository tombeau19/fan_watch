import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import TeamList from './components//Teams/TeamList'
import TeamPage from './components/Teams/TeamPage'
import NavBar from './components/NavBar/NavBar'
import TeamNavBar from './components/NavBar/TeamNavBar'
import styled from 'styled-components'

const Landing = styled.div`
background: url('http://www.kenn.com/images/blog/nfl_ref002.jpg') no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
padding: 0;
margin: 0;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Arrow = styled.img`
width: 75px;
height: 75px;
`

const Title = styled.h1`
color: #EA8538;
font-family: 'Coda Caption', sans-serif;
font-size: 100px;
margin: 0px
`

const Intro = styled.h1`
color: #EA8538;
font-family: 'Coda Caption', sans-serif;
font-size: 30px;
padding-bottom: 50px;
`

class App extends Component {

  state = {
    teams: [],
    team: {},
    redirectToTeamPage: false,
    homePage: true,
    hideLanding: true
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

  setHideLanding = async (event) => {
    await this.setState({ hideLanding: !this.state.hideLanding })
  }

  setRedirectToTeamPage = async () => {
    await this.setState({ redirectToTeamPage: !this.state.redirectToTeamPage })
  }

  render() {
    const TeamListComponent = () => (<TeamList getSingleTeam={this.getSingleTeam} teams={this.state.teams} />)
    const TeamPageComponent = () => (<TeamPage team={this.state.team} />)
    return (
      <Router>
        <div>
          {this.state.hideLanding ? <Landing>
            <Title>Fan Watch</Title>
            <Intro>No more arguing on where to watch YOUR team</Intro>
            <a onClick={this.setHideLanding}>
              <Arrow src='https://alexkessock.com/img/icon_53743.png' alt='arrow icon' />
            </a>
          </Landing> : null}
          <div>
            {this.state.homePage ? <NavBar /> : <TeamNavBar setHomePageNavBar={this.setHomePageNavBar} team={this.state.team} />}
            {this.state.redirectToTeamPage ? <Redirect to={`/${this.state.team.nick_name}`} /> : <Redirect to={`/`} />}
            <Switch>
              <Route exact path='/' render={TeamListComponent} />
              <Route path='/:team_id' render={TeamPageComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
