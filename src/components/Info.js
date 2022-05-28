import man from '../images/man.jpg'
import React from 'react'



export default function Info() {
    return (
        <header>
            <img src={man} className="header-image" alt='man' />
            <div className="header-person">    
                <h3>John Doe</h3>
                <h4>Frontend Developer</h4>
                <h5>johndoe.website</h5>
                <button className="button-email">Email</button>
                <button className="button-linkedin">LinkedIn</button>
            </div>
        </header>
    )
}