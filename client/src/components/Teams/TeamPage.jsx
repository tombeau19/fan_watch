import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'
import BarPage from '../Bars/BarPage'
import SearchAndAddBarForm from '../Bars/SearchAndAddBarForm'
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-family: 'Coda Caption', sans-serif;
`

const TeamContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
`

class TeamPage extends Component {

    state = {
        team: {},
        bars: [],
        newBar: {},
        bar: {},
        showBarPage: false,
        search: ''
    }

    async componentWillMount() {
        await this.setState({team: this.props.team})
        await this.getSingleTeamBars()
        console.log(Window.location)
        await Window.location
    }

    getSingleTeamBars = async () => {
        try {
            const team_id = this.state.team.id
            const response = await axios.get(`/api/teams/${team_id}/bars`)
            this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    searchForBarInfoAndPostToDataBase = async (event) => {
        event.preventDefault()
        try {
            const search = this.state.search
            const barResponse = await axios.get(`api/barsearch/${search}`)
            const formattedResponse = {
                name: barResponse.data.businesses[0].name,
                rating: barResponse.data.businesses[0].rating,
                image_url: barResponse.data.businesses[0].image_url,
                yelp_id: barResponse.data.businesses[0].id,
                address: barResponse.data.businesses[0].location.address1,
                city: barResponse.data.businesses[0].location.city,
                state: barResponse.data.businesses[0].location.state,
                zip_code: barResponse.data.businesses[0].location.zip_code
            }
            const emptySearch = ''
            await this.setState({
                newBar: formattedResponse,
                search: emptySearch
            })
        } catch (err) {
            console.log(err)
        } try {
            const a = window.confirm(`${this.state.newBar.name} located at ${this.state.newBar.address}?`)
            if (a !== true) {
                alert('Try another bar')
                const emptySearch = ''
                this.setState({ 
                    newBar: {}, 
                    search: emptySearch 
                })
            }
        } catch (err) {
            console.log(err)
        } try {
            this.state.bars.map((bar) => {
                if (bar.yelp_id === this.state.newBar.yelp_id) {
                    alert('Already Exists')
                    this.setState({ newBar: {} })
                }
            })
        } catch (err) {
            console.log(err)
        } try {
            const team_id = this.state.team.id
            const response = await axios.post(`/api/teams/${team_id}/bars`, {
                bar: this.state.newBar
            })
            await this.setState({ bars: response.data })
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
            const response = await axios.get(`/api/bars/${bar_id}`)
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

        if (this.state.bars.length === 0) {
            return (
                <TeamContainer>
                    <Title>{this.state.team.name} Fan Page</Title>
                    <h3>There is no bar to watch the {this.state.team.name}, search where you watch below!</h3>
                    <SearchAndAddBarForm handleChange={this.handleChange} searchForBarInfoAndPostToDataBase={this.searchForBarInfoAndPostToDataBase} />
                </TeamContainer>
            )
        }

        return (
            <TeamContainer>
                <Title>{this.state.team.name} Fan Page</Title>
                <h3>Dont see your favorite spot? Search below</h3>
                <SearchAndAddBarForm handleChange={this.handleChange} search={this.state.search} searchForBarInfoAndPostToDataBase={this.searchForBarInfoAndPostToDataBase} />
                <BarList bars={this.state.bars} getSingleBarInfoAndPosts={this.getSingleBarInfoAndPosts} />
                {this.state.showBarPage ? <BarPage bar={this.state.bar} /> : null}
            </TeamContainer>
        )
    }
}

export default TeamPage