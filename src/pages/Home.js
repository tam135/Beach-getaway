import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import LowerNavBar from '../components/LowerNavBar'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero';
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import Slideshow from '../components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
    return (
      <>

        <Hero>
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $399"
          >
            <Link to="/rooms" className="btn-primary">
              Browse Rooms
            </Link>
          </Banner>
        </Hero>
        <LowerNavBar />
        <Services />
        <FeaturedRooms />
        <SignUp />
        <Footer />
      </>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

