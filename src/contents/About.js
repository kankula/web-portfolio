import React from 'react'
import './About.css'
import Social from '../components/subcomponent/Social'
import TabProfile from '../components/subcomponent/TabProfile'
import ProfilePic from '../img/profile1.jpg'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="max-width">
                <div className="about-container">
                    <div className="profile-pic">
                        <img src={ProfilePic} className={ProfilePic} />
                     <Social />
                    </div>
                    <div className="profile-n">
                        <TabProfile/>
                    </div>
                </div>

                
            </div>
           
        </section>
    )
}

export default About
