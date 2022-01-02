import React from 'react'
import './Projects.css'
import Proj_pic1 from '../img/p1.png'
import Proj_pic2 from '../img/p2.png'
import Proj_pic3 from '../img/p3.png'
import Proj_pic4 from '../img/p4.png'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="max-width">
                <div className="proj-c">
                    <h1>My Projects</h1>
                    <div className="container">
                        {/* <div className="project-item">
                            <div className="face face1">
                                <img src={Proj_pic1} alt="p1.png" className="Proj_pic1" />
                            </div>
                            <div className="face face2">
                                <a href="https://kankula.github.io/layout-facebook/" target="_blank">Open Web</a>
                                <a href="https://github.com/kankula/layout-facebook.git" target="_blank">Open Code</a>
                            </div>
                        </div> */}
                        {/* <div className="project-item">
                            <div className="face face1">
                                <img src={Proj_pic2} alt="p2.png" className="Proj_pic2" />
                            </div>
                            <div className="face face2">
                                <a href="https://kankula.github.io/Animation-Sea/" target="_blank">Open Web</a>
                                <a href="https://github.com/kankula/Animation-Sea.git" target="_blank">Open Code</a>
                            </div>
                        </div> */}
                        <div className="project-item">
                            <div className="face face1">
                                <img src={Proj_pic3} alt="p3.png" className="Proj_pic3" />
                            </div>
                            <div className="face face2">
                                <a href="https://kankula.github.io/App-Shop/" target="_blank">Open Web</a>
                                <a href="https://github.com/kankula/App-Shop.git" target="_blank">Open Code</a>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="face face1">
                                <img src={Proj_pic4} alt="p4.png" className="Proj_pic4" />
                            </div>
                            <div className="face face2">
                                <a href="https://kankula.github.io/Test-Post/" target="_blank">Open Web</a>
                                <a href="https://github.com/kankula/Test-Post.git" target="_blank">Open Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
