import React from 'react'
import "./Contact.scss"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-Container">
                <h2>get in touch.</h2>
                <div className="Contact-icons">
                    <a href="mailto:sunnywong18@gmail.com?"><img src={email} alt="email icon" /><p>sunnywong18@gmail.com</p></a>
                    <a href="https://www.linkedin.com/in/yukyinwong/"><img src={linkedin} alt="linkedin icon" /><p>LinkedIn/yukyinwong</p></a>
                    <a href="https://github.com/SunnyDoubleU/"><img src={github} alt="github icon" />Github/SunnyDoubleU</a>
                </div>
            </div>

        </div>
    )
}
