import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'
import BarPage from '../Bars/BarPage'
require('dotenv').config()


class TeamPage extends Component {

    state = {
        team: {},
        bars: [],
        bar: {},
        showBarPage: false
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

    render() {

        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
                <BarList bars={this.state.bars} bar={this.state.bar} getSingleBarInfoAndPosts={this.getSingleBarInfoAndPosts} />
                {this.state.showBarPage ? <BarPage bar={this.state.bar} /> : null}
            </div>
        )
    }
}

export default TeamPage