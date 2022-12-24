import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

//imports swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../../data/products'

const Slider = () => {
  return (
    <div className="s-container">
        <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        
        
        >
        <SwiperSlide>{SliderProducts} </SwiperSlide>
        
    </Swiper>
    </div>
    
  )
}

export default Slider