import React from 'react'
import StandBrightNav from '../components/StandBrightNav'


export default function BasicLayout(props) {
    return (
        <>
            <StandBrightNav />
            {props.children}
        </>
    )
}
