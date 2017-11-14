import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'
import BarPage from '../Bars/BarPage'
require('dotenv').config()


class TeamPage extends Component {

    state = {
        team: {},
        bars: [],
        newBar: {},
        bar: {},
        showBarPage: false,
        search: ''
    }

    componentWillMount() {
        this.getSingleTeam()
        this.getSingleTeamBars()
    }

    getSingleTeam = async () => {
        try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    getSingleTeamBars = async () => {
        try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars`)
            this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    searchForBarInfoAndPostToDataBase = async (event) => {
        event.preventDefault()
        //takes in a barname as the search parameter
        //makes an axios get call to /api/barsearch/:barname to search for the bar
        try {
            //take the response.data and set to newBar state
            const search = this.state.search
            
            const barResponse = await axios.get(`api/barsearch/${search}`)
            
            const formattedResponse = {
                name: barResponse.data.businesses[0].name,
                rating: barResponse.data.businesses[0].rating,
                image_url: barResponse.data.businesses[0].image_url,
                yelp_id: barResponse.data.businesses[0].id,
                location: barResponse.data.businesses[0].location.display_address
            }
            await this.setState({ newBar: formattedResponse })
            //prompt user to confirm they did in fact enter the correct bar

            //make an axios post to /api/bars to create a new bar
            const { team_id } = this.props.match.params
            const response = await axios.post(`/api/teams/${team_id}/bars`, {
                bar: this.state.newBar
            })
            await this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
        //then call getSingleTeamBars() in order to get all bars including the new one
        //re-render page with new bar on page
    }

    getSingleBarInfoAndPosts = async (id) => {
        if (this.state.showBarPage) {
            this.setState({ showBarPage: !this.state.showBarPage })
        }
        try {
            const bar_id = id
            const response = await axios.get(`/api/barfind/${bar_id}`)
            this.setState({
                bar: response.data,
                showBarPage: !this.state.showBarPage
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {

        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
                <BarList bars={this.state.bars} bar={this.state.bar} getSingleBarInfoAndPosts={this.getSingleBarInfoAndPosts} />



                <form onSubmit={this.searchForBarInfoAndPostToDataBase}>
                    <input onChange={this.handleChange} type='text' name='search' placeholder='Bar Name' />
                    <button>search</button>
                </form>



                {this.state.showBarPage ? <BarPage bar={this.state.bar} /> : null}
            </div>
        )
    }
}

export default TeamPage