import React from "react";
import './portfolio.css';
import Videogames from '../../assets/PI-videogames.jpg';
import SotelinoGallery from '../../assets/SotelinoGallery.jpeg';
import AppMovies from '../../assets/appMovies.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Videogames} alt="Doggos App" />
                    </div>
                    <h3>VideoGames App</h3>
                    <div className="portfolio__item-cta">
                        <a 
                        href="https://github.com/jptuttolomondo/PI-Videogames" 
                        className="btn" 
                        target='_blank'>
                            Github
                        </a>
                        <a 
                        href="https://pi-videogames-d0evm26uq-jptuttolomondo.vercel.app/" 
                        className="btn btn-primary"
                        target='_blank'>
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={SotelinoGallery} alt="Sotelino Gallery" />
                    </div>
                    <h3>Sotelino Gallery</h3>
                    <div className="portfolio__item-cta">
                        <a 
                        href="https://github.com/Jorg397/Gallery-Art-Final-Project" 
                        className="btn" 
                        target='_blank'>
                            Github
                        </a>
                        <a 
                        href="https://sotelino.vercel.app" 
                        className="btn btn-primary"
                        target='_blank'>
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={AppMovies} alt="App Movies" />
                    </div>
                    <h3>App Movies Benjamin Maggi Challenge</h3>
                    <div className="portfolio__item-cta">
                        <a 
                        href="https://github.com/jptuttolomondo/appMovies" 
                        className="btn" 
                        target='_blank'>
                            Github
                        </a>
                        <a 
                        href="https://app-movies-jptuttolomondo-dbrdkm5i5-jptuttolomondo.vercel.app/home" 
                        className="btn btn-primary"
                        target='_blank'>
                            Live Demo
                        </a>
                    </div>
                </article>

                
            </div>
        </section>
    );
}

export default Portfolio;