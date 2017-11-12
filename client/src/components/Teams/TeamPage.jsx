import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'
import BarPage from '../Bars/BarPage'

class TeamPage extends Component {

    state = {
        team: {},
        bars: [],
        posts:[]
    }

    componentWillMount() {
        this.getSingleTeamAndTheirBars()
    }

    async getSingleTeamAndTheirBars() {
        try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        } try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars`)
            this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    getBarInfoAndPosts = () => {
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
                <BarList team={this.state.team} bars={this.state.bars} />
                <BarPage team={this.state.team} bars={this.state.bars}/>
            </div>
        )
    }
}

export default TeamPage