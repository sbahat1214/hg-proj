import React from 'react'
import SecondAppbar from '../components/SecondAppbar'
import Banner from '../components/Banner'
import { Container, Typography } from '@material-ui/core'
import Heading from '../components/Heading'
import Brands from '../components/Brands'
import Category from '../components/Category'

const Home = () => {
    return (
        <div>
            <SecondAppbar />
            <Banner>
               
            </Banner>
            <Heading heading="Choose Service by Brands" />
            <Brands />
            <hr />
            <Heading heading="Choose Service by Categories" />
            <Category />
            <Category />
            <hr />
        </div>
    )
}

export default Home
