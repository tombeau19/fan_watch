import React from 'react'
import styled from 'styled-components'

const TeamContainer = styled.div`

`

const Team = styled.div`
margin: 0;
h5{
    margin 0;
}
`


const TeamList = (props) => {
    return (
        <TeamContainer>
            {
                props.teams.map((team) => {
                    return (
                        <Team>
                            <h5>{team.name}</h5>
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