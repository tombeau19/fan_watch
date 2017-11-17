import React from 'react'
import styled from 'styled-components'

const TeamContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: space-around;
`

const Team = styled.div`
margin: 0;
padding: 5px;
`


const TeamList = (props) => {
    return (
        <TeamContainer>
            {
                props.teams.map((team) => {
                    return (
                        <Team>
                            <button onClick={(event) => {
                                event.preventDefault()
                                props.getSingleTeam(team.id)
                            }}><img src={team.logo} alt={`${team.name} logo`} /></button>
                        </Team>
                    )
                })
            }
        </TeamContainer>
    )
}

export default TeamList