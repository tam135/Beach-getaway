import React from 'react'
import Title from './Title'

export default function SignUp() {
    return (
        <div className='signup'>
            <div className="signup__container">
                <Title title='Stay in touch' />
                <p>Subscribe to our newsletter for exclusive promotions and special offers</p>
                <div className="signup-inputs">
                    <input type='text' placeholder='Email Address'></input>
                    <button className='signup-button'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
