import React from 'react'
import { Link } from 'react-router-dom'

const BarList = (props) => {

    return (
        <div>
            {props.bars.map((bar) => {
                return (
                    <div>
                        <button onClick={()=> props.getSingleBarInfoAndPosts(bar.id)}>{bar.name}</button>
                        <p>{bar.id}</p>
                        {/* GIVEN I am on the TeamPage 
                        AND I see a List of bars
                        WHEN I click a bar name
                        THEN I should see a list of that bars posts below*/}
                        {/* GIVEN I have looked at the posts 
                        WHEN I click the bar name again 
                        THEN it will hide the posts */}
                        {/* {bar.posts.map((post)=>{
                            return(
                                <div>{post.title}</div>
                            )
                        })} */}
                    </div>
                )
            })}
        </div>
    )
}

export default BarList