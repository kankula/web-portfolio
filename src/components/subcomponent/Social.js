import React from 'react'
import './Social.css'

const social = () => {
    return (
        <div className="contact">
            <div className="container-s">
                <div className="sub-contact">
                    <h2>Phone: <span>063-3151153</span></h2>
                    <h2>Line: <span>kan_kkb</span></h2>
                    <h2>Email: <span>kiri0944@gmail.com</span></h2>
                </div>
                <div className="icon-social">
                    <a href="https://web.facebook.com/masato.yuki.967/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/krapowgaikailatte/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/kankula" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default social
