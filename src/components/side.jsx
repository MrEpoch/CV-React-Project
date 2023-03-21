import { Component, useState } from 'react'
import "./styles/side.css";

export default function Side() {
    return (
        <div className='side-react'>
          <div class="side-moveable">
            <img src="" alt="my photo" />
            <div className="top-side">
                <h3>Contact Me</h3>
                <h4>+444 444 444</h4>
                <h4>noemail@noemail.no</h4>
            </div>
            <div className="fast-svg">
              
            </div>
            <div className="bottom-side">
                <h3>My skills</h3>
                <h4>Web developer</h4>
                <h4>Front-end web development</h4>
                <h4>Working with Linux OS</h4>
            </div>
          </div>
        </div>
    )
}
