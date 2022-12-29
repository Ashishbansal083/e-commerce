import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../assets/testimonialHero.png'
// import Swiper from 'swiper'
import {TestimonialsData} from '../../data/testimonials'
import { Swiper,SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top rated</span>
                <span>Seedily say has suitable disposl and boy .Exercise joy man children rejoiced</span>
            </div>       
            <img src={Hero} alt='img not loaded' className=''/>
            <div className={css.container}>
                <span>100k</span>
                <span>Happy customers with us</span>
            </div>
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousal}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousal}
            >
                {
                    TestimonialsData.map((testimonial,i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial }>
                                <img src={testimonial.image} alt='img'/>
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    </div>
  )
}

export default Testimonials