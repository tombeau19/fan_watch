import React from 'react'
import { Link } from 'react-router-dom'

const TeamNavBar = (props) => {
    return (
        <div>
            <div>Fan Watch {props.team.name} <img src={props.team.logo} alt={`${props.team.name} logo`} /></div>
            <Link to='/'><button onClick={() => {props.setHomePageNavBar()}}>Home</button></Link>
        </div>
    )
}

export default TeamNavBar