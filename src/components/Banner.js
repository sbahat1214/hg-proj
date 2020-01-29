import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import banner from '../assets/images/banner.jpg'
import { Typography } from '@material-ui/core';

const Banner = (props) => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth='xl' style={{padding:'0px', background:`url(${banner}) no-repeat`,backgroundSize:'100%', width:'100%'}}>
            {props.children}
            <div className="container my-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        Form here
                    </div>
                    <div className="col-6">
                        <Typography variant='h3' style={{color:'white', fontWeight:'bold'}}>
                            Authorised service centers for all top brands under one Roof ! 
                        </Typography>
                    </div>
                </div>
            </div>
        </Container>
        </React.Fragment>
    )
}

export default Banner
