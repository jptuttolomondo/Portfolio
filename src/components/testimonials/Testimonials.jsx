import React from "react";
import './testimonials.css';
import Keily from '../../assets/Keily.jpeg';

import Victor from '../../assets/Victor.png';
import Juan from '../../assets/Juan.jpeg';
import Ivan from '../../assets/Ivan.jpeg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const data = [
      {
            avatar: Juan,
            name: 'Juan Manuel Duque Restrepo',
            review: 'I worked with Juan Pablo on the final project of the Henry Academy Bootcamp and it was really a pleasure. He is a very proactive programmer, which is why he manages to achieve important objectives in a short time. He likes to be constantly learning and one of his strengths is teamwork.'
        },{
            avatar: Keily,
            name: 'Keily Garcia Leal',
            review: 'I had the opportunity to work with Juan Pablo on the final project of the bootcamp I am Henry. He is an excellent person, very capable of solving problems, he is very curious, always looking to do more than what is asked of him, his skills are very good in a few words in a full stack web developer. 😀'
        },
        {
            avatar: Victor,
            name: 'Victor Rodriguez',
            review: 'I worked with Juan Pablo in the preparation of the final project for the SoyHenry Bootcamp, I was able to demonstrate his proactivity, critical thinking, teamwork, and ability to adapt to the needs of development and to solve problems. It was a real pleasure working together.'
        },
     

    ]
    return (
        <section id="testimonials">
            <h5>Review from coworkers</h5>
            <h2>Testimonials</h2>

            <Swiper 
            className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                {
                data.map(({avatar,name,review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;