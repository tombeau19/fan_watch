import React from 'react'
//import PostList from '../Posts/PostList'
import Moment from 'react-moment';

const BarPage = (props) => {

    return (
        <div>
            <h1>{props.bar.name}</h1>
            <h4>Yelp Rating: {props.bar.rating}</h4>
            <p>{props.bar.address}</p>
            <p>{props.bar.city} {props.bar.state}, {props.bar.zip_code}</p>
            {props.bar.posts.map((post) => {
                return (
                    <div>
                        <hr />
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p><Moment fromNow>{post.created_at}</Moment></p>
                        <hr />
                    </div>
                )
            })}
            <img src={props.bar.image_url} alt={`${props.bar.name}`} />

        </div>
    )

}

export default BarPage