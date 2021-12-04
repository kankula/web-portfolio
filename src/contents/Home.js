import React from 'react'
import './Home.css'
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="max-width">
            <div className="home-content">
                    <div className="text-1">Hello,</div>
                    <div className="text-2">I'm Kantapon Klinkulab</div>
                    <ReactTypingEffect text="Front End Developer" speed={80} className="text-3"/>
                </div>
            </div>
        </section>
    )
}

export default Home
