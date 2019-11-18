import React from 'react'
import "./BrightHome.scss"
import background from "../images/whole.png";
import AboutMe from '../components/AboutMe';
import BasicLayout from '../layout/BasicLayout';
import Responsive from '../components/Responsive';
import Projects from '../components/Projects'
import Contact from "../components/Contact"


export default function BrightHome() {
    return (
        <>
            <BasicLayout>
                <div className="Bright-Home-Container">
                    <img className="Background" src={background} alt="background" />
                    <div className="BrightHome">
                        <h1 className="Header-Margin">My name is Sunny <br /> & I'm a Fullstack Developer</h1>
                    </div>
                </div>

                <AboutMe />
                <Responsive />
                <Projects />
                <Contact />
            </BasicLayout>
        </>
    )
}
