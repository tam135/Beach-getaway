import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import LowerNavBar from '../components/LowerNavBar'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $399">
                    <Link to='/rooms' className="btn-primary">
                        Browse Rooms
                    </Link>
                </Banner>
            </Hero>
            <LowerNavBar/>
            <Services/>
            <FeaturedRooms/>
        </>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

