import React, { Component } from 'react'
import axios from 'axios'

class BarPage extends Component {

    state = {
        team: {},
        bars: []
    }

    async componentWillMount() {
        try {
            const { id, team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars/${id}`)
            await this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        } try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page </h1>
                <h3>{this.state.bars.name}</h3>
                <h4>yelp rating: {this.state.bars.rating}</h4>
                <img src={this.state.bars.image_url} alt={`${this.state.bars.name} picture`} />
            </div>
        )
    }
}

export default BarPage