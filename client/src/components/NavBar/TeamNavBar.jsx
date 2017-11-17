import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyle = styled.div`
display: flex;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
justify-content: space-around;
`

const Title = styled.div`
justify-content: center;
font-family: 'Coda Caption', sans-serif;
text-decoration: none;
font-size: 38px;
color: rgb(58, 55, 56);
display: flex;
align-items: center
`

const Image = styled.img`
height: 75px;
width: 75px;
`

const FanWatch = styled.button`
justify-content: center;
font-family: 'Coda Caption', sans-serif;
font-size: 50px;
color: rgb(58, 55, 56);
display: flex;
background-color: white;
border: none;
align-items: center;
a {
    text-decoration: none;
    color: rgb(58, 55, 56);
} 
a:hover {
    text-shadow: 1px 1px 2px
}
`

const TeamNavBar = (props) => {
    return (
        <NavBarStyle>
            <Title>
                <Image src='./fan_watch.png' alt='logo' />

                <FanWatch onClick={() => { props.setHomePageNavBar() }}>
                    <Link to='/'>Fan Watch</Link>
                </FanWatch>
            </Title>
            <div>
                <img src={props.team.logo} alt={`${props.team.name} logo`} />
            </div>
        </NavBarStyle>
    )
}

export default TeamNavBar