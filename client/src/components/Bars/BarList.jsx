import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);
    max-width: 100%;
    height: auto;
    margin: auto;
    text-align: center;
    padding: 10px;
`

const TeamContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: center;
`

const Button = styled.button`
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
`

const BarList = (props) => {

    return (
        <TeamContainer>
            {props.bars.map((bar) => {
                return (
                    <BarContainer>
                        <Button onClick={() => props.getSingleBarInfoAndPosts(bar.id)}>{bar.name}</Button>
                        <h4>Yelp Rating: {bar.rating}</h4>
                        <p>{bar.address}</p>
                        <p>{bar.city} {bar.state}, {bar.zip_code}</p>
                    </BarContainer>
                )
            })}
        </TeamContainer>
    )
}

export default BarList