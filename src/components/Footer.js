import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutubeSquare} from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='footer'>
            <section className="footer-icons">
                <ul className='footer-icons-ul'>
                    <li><a href='#' className='footer-icons'><FaFacebookSquare size={35} /></a></li>
                    <li><a href="#" className='footer-icons'><FaInstagram size={35} /></a></li>
                    <li><a href="#" className='footer-icons'><FaTwitter size={35} /></a></li>
                    <li><a href="#" className='footer-icons'><FaYoutubeSquare size={35} /></a></li>
                </ul>
            </section>

            <section className="footer-info">
                <article className="footer-info-col">
                    <h5>About</h5>
                    <ul>
                        <li><a href='#' className='footer-links'>Awards</a></li>
                        <li><a href='#' className='footer-links'>Browse Locations</a></li>
                        <li><a href='#' className='footer-links'>News Room</a></li>
                        <li><a href='#' className='footer-links'>Best Rate Guarantee</a></li>
                        <li><a href='#' className='footer-links'>Careers</a></li>
                    </ul>
                </article>

                <article className="footer-info-col">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href='#' className='footer-links'>Terms & Conditions</a></li>
                        <li><a href='#' className='footer-links'>Privacy Policy</a></li>
                        <li><a href='#' className='footer-links'>Assessibility Notice</a></li>
                    </ul>
                </article>

                <article className="footer-info-col">
                    <h5>Resources</h5>
                    <ul>
                        <li><a href='#' className='footer-links'>My Account</a></li>
                        <li><a href='#' className='footer-links'>Rewards</a></li>
                        <li><a href='#' className='footer-links'>Blog</a></li>
                        <li><a href='#' className='footer-links'>Newsletter</a></li>
                        <li><a href='#' className='footer-links'>Digital Resources</a></li>
                    </ul>
                </article>
            </section>

        </div>
    )
}
