import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"
import React from 'react'



export default function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter-icon" /> {/*Twitter icon by Icons8*/}
            <img src={facebook} alt="facebook-icon" /> {/*Facebook icon by Icons8*/}
            <img src={instagram} alt="instagram-icon" /> {/*Instagram icon by Icons8*/}
            <img src={github} alt="github-icon" /> {/*GitHub icon by Icons8*/}
        </footer>
    )
}