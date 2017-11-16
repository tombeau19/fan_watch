import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import TeamPage from './components/Teams/TeamPage'
import SignUpLogIn from './components/SignUpLogIn'
import NavBar from './components/NavBar'

import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"

class App extends Component {

  state = {
    teams: [],
    signedIn: false
  }

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()
      if (signedIn) {
        setAxiosDefaults()
      }
      this.setState({
        signedIn,
      })
    } catch (error) {
      console.log(error)
    } try {
      await this.getAllTeams()
    } catch (error) {
      console.log(error)
    } 
  }
    
  

signUp = async (email, password, password_confirmation, name) => {
  try {
    const payload = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      name: name
    }
    const response = await axios.post(`/auth`, payload)
    saveAuthTokens(response.headers)
    this.setState({ signedIn: true })
  } catch (err) {
    console.log(err)
  }
}

signIn = async (email, password) => {
  try {
    const payload = {
      email: email,
      password: password
    }
    const response = await axios.post('/auth/sign_in', payload)
    saveAuthTokens(response.headers)

    this.setState({ signedIn: true })
  } catch (err) {
    console.log(err)
  }
}

signOut = async (event) => {
  try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({signedIn: false})
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
  const SignUpLogInComponent = () => (<SignUpLogIn signUp={this.signUp} signIn={this.signIn} />)
  const NavBarComponent = () => (<NavBar teams={this.state.teams}/>)
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={HomePageComponent} />
          <Route exact path='/signUp' render={SignUpLogInComponent} />
          <Route exact path='/:team_id' component={TeamPage} />
        </Switch>
        {this.state.signedIn ? <Redirect to='/' /> : <Redirect to='/signUp' />}
      </div>
    </Router>
  )
}
}

export default App
