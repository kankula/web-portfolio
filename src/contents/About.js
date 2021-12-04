import React from 'react'
import './About.css'
import Social from '../components/subcomponent/Social'
import TabProfile from '../components/subcomponent/TabProfile'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="max-width">
                <div className="about-container">
                    <div className="profile-pic">
                        <img src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t31.18172-8/25073495_522358988124179_3042695613682305773_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEU2YNq4qMjGVmGxWVeRreu7gAy-CZ6biLuADL4JnpuIjC7op76NU_hcM6qQ5UWZg1qkcK5pUhbSxYwJvCyCC5K&_nc_ohc=1W55AzJJWIUAX9QSoNO&_nc_oc=AQlkxrGsGRz_8qHJUOeMv4tl6DCezhg57TXoHWCwHqQEjdiRt2L_b-CTYc7jXYWup8s&tn=X_uebd2wWstL-niM&_nc_ht=scontent.fbkk4-3.fna&oh=902e63b9f196118016a9ff7162275a97&oe=61C68400" className="img-pro" />
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
