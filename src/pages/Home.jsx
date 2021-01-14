import React from 'react'
import Hero from './../components/Hero';
import Banner from './../components/Banner';

import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
       <>
            <Hero>
                <Banner title="HOME & AWAY" subtitle="Our hotel remain stylish, modern, forward thinking global of hospitality.We are concerned about your happiness and comfortability.">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>

            <Services/>
            <FeaturedRooms/>
       </>
    )
}

export default Home
