import React from 'react'
import "./Responsive.scss"
import responsiveImage from "../images/responsive.png"

export default function Responsive() {
    return (
        <div className="Responsive-Container">
            <img src={responsiveImage} alt="Responsive design" />
            <>
                <h2>responsoive designs</h2>
                <p>My projects are developed with a mobile-first approach in mind, ensuring a smooth and comfotable experience no matter what digital product you are using.</p>
            </>
        </div>
    )
}
