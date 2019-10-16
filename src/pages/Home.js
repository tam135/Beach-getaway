import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $399">
                    <Link to='/rooms' className="btn-primary">
                        Browse Rooms
                    </Link>
                </Banner>
            </Hero>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

