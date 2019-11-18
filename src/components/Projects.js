import React from 'react'
import "./Projects.scss"

export default function Projects() {
    return (
        <div className="Projects">
            <div className="Project-Container">
                <h2>recent projects</h2>

                <div id="emi" className="Individual-Projects">
                        <h3>emi.</h3>
                        <h5>//fullstack development</h5>
                        <p>React JS, Node.js, Express.js, SCSS, MongoDB, Mongoose, JSX, Chatkit API</p>
                </div>


                <div id="spesu" className="Individual-Projects">
                        <h3>Spēsu</h3>
                        <h5>//fullstack development</h5>
                        <p>Node.js, Express.js, Handlebars, SCSS, MongoDB, Mongoose</p>
                </div>

                <div id="more" className="Individual-Projects">
                    <h4>more coming soon</h4>
                </div>
            </div>
        </div>
    )
}
