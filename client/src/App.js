import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import TeamList from './components/Teams/TeamList'
import BarPage from './components/Bars/BarPage'


class App extends Component {

  state = {
    teams: []
  }

  async componentWillMount() {
    await this.getAllTeams()
  }

  async getAllTeams() {
    try {
      const response = await axios.get(`/api/teams`)
      this.setState({ teams: response.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const HomePageComponent = () => (<HomePage teams={this.state.teams} />)
    return (
      <Router>
        <div>
          <h1>Fan Watch</h1>
          <Switch>
            <Route exact path='/' render={HomePageComponent} />
            <Route exact path='/:team_id' component={TeamList} />
            <Route exact path='/:team_id/bars/:id' component={BarPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
