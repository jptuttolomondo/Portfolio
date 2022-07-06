import React from "react";
import './about.css';
import ME from '../../assets/Pablo.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about__container">
               

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>e-commerce app, academic works backend and frontend . Image Processing, Machine Learnig whith QGIS Precision Agriculture, from satellite and drone's images</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>1</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>3 Indiviual Projects and 1 Grupal Project in Henry's FullStack Bootcamp Completed</small>
                        </article>
                    </div>

                    <p>
                        I am Systems Analyst Bachelor and I updated to FullStack development and learning new technologies. At 53 years old, I want to help to simplify people's lives .Welcome!!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;