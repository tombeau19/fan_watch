import React from 'react'
import styled from 'styled-components'

const NavBarStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Title = styled.div`
justify-content: center;
font-family: 'Coda Caption', sans-serif;
font-size: 50px;
color: rgb(58, 55, 56);
display: flex;
align-items: center
`

const Image = styled.img`
height: 100px;
width: 100px;
`

const NavBar = (props) => {
    return (
        <NavBarStyle>
            <Title><Image src='./fan_watch.png' alt='logo'/><div>Fan Watch</div></Title>
        </NavBarStyle>
    )
}

export default NavBar