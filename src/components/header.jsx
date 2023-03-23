import React, { useEffect, useRef } from 'react'
import "./styles/header.css"
import photo from "./images/some-guy.jpg"
import Typed from "typed.js"

export default function Header() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Front-end Developer", "UX / UI Designer", "React and Webpack"],
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <header className='header-react'>
            <div className="photo">
                <img src={photo} alt="" srcSet="" />
            </div>
            <div className="introduction">
                <h4>I'am</h4>
                <h1 className='try'>Mr. Epoch</h1>
                <div className="intro-h">
                    <h4 ref={el} className='forChange'>Front-end Web developer</h4>
                </div>
            </div>
        </header>
    )
}
