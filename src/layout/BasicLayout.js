import React from 'react'
import StandBrightNav from '../components/StandBrightNav'
import BrightFooter from '../components/BrightFooter'

export default function BasicLayout(props) {
    return (
        <>
            <StandBrightNav />
            {props.children}
            <BrightFooter />
        </>
    )
}
