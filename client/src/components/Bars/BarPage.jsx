import React from 'react'
import axios from 'axios'
import PostList from '../Posts/PostList'

const BarPage = (props) => {

    return (
        <div>
            <h1>{props.bar.name}</h1>
            <h4>Yelp Rating: {props.bar.rating}</h4>
            {props.bar.posts.map((post) => {
                return (
                    <div>
                        <hr/>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <hr/>
                    </div>
                )
            })}
            <img src={props.bar.image_url} alt={`${props.bar.name} pictures`} />

        </div>
    )

}

export default BarPage