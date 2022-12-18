import React from 'react'
import { Image } from 'semantic-ui-react'
import image from '../images/confused-counting.gif'

function Result(props) {

    const price = props.dataPrice

    if (price === 0) {
        return (
            <div></div>
        )
    }

    return (
        <div>
            <Image src={image} size='large' centered/>
            <br/>
            <p>Your booking will cost a total of <strong>{`£${price}`}</strong></p>
            <br/>
        </div>
)}

export default Result
