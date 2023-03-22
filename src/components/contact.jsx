import React from 'react'
import "./styles/contact.css"
import contactImg from "./images/contact.png"

export default function Contact() {
    return (
        <div className="contact">
            <h1>CONTACT ME</h1>
            <img src={contactImg} className="contact-img" alt="" srcSet="" />
            <h3>Phone: 444 444 444</h3>
            <h3>Email: noemail@noemail.no</h3>
            <h3>Social Media: I don't know</h3>
        </div>
    )
}
