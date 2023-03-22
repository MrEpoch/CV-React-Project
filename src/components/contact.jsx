import React from 'react'
import "./styles/contact.css"
import contactImg from "./images/contact.png"

export default function Contact() {
    return (
        <div className="contact">
            <div className="info-contact">
                <h1>CONTACT ME</h1>
                <h3>Phone: 444 444 444</h3>
                <h3>Email: noemail@noemail.no</h3>
                <h3>Social Media: I don't know</h3>
            </div>
            <img src={contactImg} className="contact-img" alt="" srcSet="" />
        </div>
    )
}
