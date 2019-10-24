import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer'
import Slideshow from '../components/Carousel';
const Rooms = () => {
    return (
        <>
            <Slideshow/>
            <RoomContainer/>
        </>
    )
}

export default Rooms
