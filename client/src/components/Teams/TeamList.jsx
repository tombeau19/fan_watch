import React from 'react'
import styled from 'styled-components'

const TeamContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: center;
`

const Team = styled.div`
padding: 10px 5px;
`

const Title = styled.h1`
text-align: center;
font-family: 'Coda Caption', sans-serif;
`

const Button = styled.button`
`


const TeamList = (props) => {
    return (
        <div>
        <Title>Where to watch YOUR team in Atlanta</Title>
        <TeamContainer>
            
            {
                props.teams.map((team) => {
                    return (
                        <Team>
                            <Button onClick={(event) => {
                                event.preventDefault()
                                props.getSingleTeam(team.id)
                            }}><img src={team.logo} alt={`${team.name} logo`} /></Button>
                        </Team>
                    )
                })
            }
        </TeamContainer></div>
    )
}

export default TeamList