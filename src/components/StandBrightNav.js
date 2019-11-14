import React from 'react'
import { Link } from "react-router-dom"
import "./StandBrightNav.scss"
import logo from "../images/logo.png"
import { bubble as Menu } from 'react-burger-menu'
import burger from "../images/burger-menu.png"
import cross from "../images/burger-menu-cross.png"

export default function StandBrightNav() {
    return (
        <div className="BrightNav">
            <Link to="/StandardBrightNav/#top"><img className="Logo" src={logo} alt="logo" /></Link>
            <Menu right customBurgerIcon={<img src={burger} alt="burger" />} customCrossIcon={<img src={cross} alt="cross" />}>
                <Link to='./AboutMe.js/#aboutme'>about me</Link>
                <p>about me</p>
                <p>my projects</p>
                <p>get in touch</p>
            </Menu>
        </div >
    )
}
