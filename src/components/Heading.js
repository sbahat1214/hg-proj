import React from 'react'
import { Typography } from '@material-ui/core'

const Heading = (props) => {
    return (
        <div className="container">
            <Typography variant='h3'>
            {props.heading}
            </Typography>
        </div>
    )
}

export default Heading
