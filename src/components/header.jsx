import React from 'react'
import "./styles/header.css"
import photo from "./images/some-guy.jpg"
import illustration from "./images/web-developer.png"

export default function Header() {
    return (
        <header className='header-react'>
            <div className="photo">
                <img src={photo} alt="" srcSet="" />
            </div>
            <div className="introduction">
                <h4>I'am</h4>
                <h1>Mr. Epoch</h1>
                <h4>Front-end Web developer</h4>
            </div>
            <div className="illustration"></div>
        </header>
    )
}
