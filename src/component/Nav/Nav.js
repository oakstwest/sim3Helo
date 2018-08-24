import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    console.log(props)
    return (
        <div>
            <button><Link to={'/dashboard'}>Home</Link></button>
            <button><Link to={'/post/:postid'}>New Post</Link></button>
            <a href='http://localhost:3005?auth/logout'>
                <button><Link to={'/'}>Log Out</Link></button>
            </a>
        </div>
    )
}

//this.props.location.pathname

