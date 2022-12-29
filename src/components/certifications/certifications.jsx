import React from "react";
import '../portfolio/portfolio.css';
import'./certifications.css'
import ProjectManagementCourse from '../../assets/Certificacione Juan Pablo Tuttolomondo APME.pptx.jpg';
import PMOAwaqCertificate from'../../assets/Certificacion de la PMO-Awaq_Juan Pablo Tuttolomondo_14-12-2022.jpg'
import Henry from '../../assets/certificado Henry1.jpg'
import Drone from '../../assets/DroneCertificate.jpg'

const Certifications = () => {
    return (
        <section id="portfolio">
            <h5>My Certifications & Diploma</h5>
            <h2>Certifications</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <h3>Project Management Excellence Course- Awaq ONGD</h3>
                        <img src={ProjectManagementCourse} alt="Project Management Course Certificate" />
                    </div>
                 
                    <div className="portfolio__item-cta">
                    <a href={ProjectManagementCourse} download className="btn">Download</a>
                     
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <h3>Collaboration Certificate Awaq ONGD</h3>
                        <img src={PMOAwaqCertificate} alt="volunteer Certificate" />
                    </div>
                 
                    <div className="portfolio__item-cta">
                    <a href={PMOAwaqCertificate} download className="btn">Download</a>
                     
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Henry} alt="Henry bootcamp Certificate" />
                    </div>
                    <h3>Full stack JS developer </h3>
                    <div className="portfolio__item-cta">
                    <a href={Henry} download className="btn">Download</a>
                     
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Drone} alt="Drone pilot Certificate" />
                    </div>
                    <h3>Full stack JS developer </h3>
                    <div className="portfolio__item-cta">
                    <a href={Henry} download className="btn">Download</a>
                     
                    </div>
                </article>
                
            </div>
        </section>
    );
}

export default Certifications;