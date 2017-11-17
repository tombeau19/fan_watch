import React from 'react'
import PostList from '../Posts/PostList'

const BarPage = (props) => {

    return (
        <div>
            <h1>{props.bar.name}</h1>
            <h4>Yelp Rating: {props.bar.rating}</h4>
            <p>{props.bar.address}</p>
            <p>{props.bar.city} {props.bar.state}, {props.bar.zip_code}</p>
            <PostList bar={props.bar}/>
            <img src={props.bar.image_url} alt={`${props.bar.name}`} />
        </div>
    )

}

export default BarPage