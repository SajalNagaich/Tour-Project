import React from 'react'
import style from './../Testimonial/testimonial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import profile1 from './../../assets/Testimonials-02.jpg'
import profile2 from './../../assets/Testimonials-03.jpg'
import profile3 from './../../assets/Testimonials-07.jpg'



import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Testimonial = () => {
  return (

    <div className={` ${style.Testimonial_wrapper} section`}>
        <h2>Exception Journey's with RAS TOUR</h2>

        <Swiper

                spaceBetween={30}
                slidesPerView={3}           
                breakpoints={{
                    0:{
                        slidesPerView:1
                    },
                    768:{
                        slidesPerView:2
                    },
                    1200:{
                        slidesPerView:3
                    }
                }}
                 autoplay={{
                    delay: 1500
                 }}

                modules={[Autoplay]}
        
            className={style.swiper}>
             <SwiperSlide>
                <div className={style.Testimonial_Container}>
                    <div className={style.profile}>
                      <img src={profile1} alt="" />
                       <div className={style.detail}>
                       <span>
                            Sajal Nagaich
                       </span>
                         <div className={style.ratings}>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-half-fill'></i>
                          <i className='ri-star-line'></i>

                        </div>
                       </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia.</p>

                </div>
             </SwiperSlide>

             <SwiperSlide>
                <div className={style.Testimonial_Container}>
                    <div className={style.profile}>
                        <img src={profile2} alt="" />
                        <div className={style.detail}>
                        <span>
                            Rakesh Mishra
                         </span>
                         <div className={style.ratings}>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-half-fill'></i>


                       </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia.</p>

                </div>
             </SwiperSlide>

             <SwiperSlide>
                <div className={style.Testimonial_Container}>
                    <div className={style.profile}>
                      <img src={profile1} alt="" />
                       <div className={style.detail}>
                        <span>
                            Ajay Kumar
                         </span>
                         <div className={style.ratings}>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-line'></i>

                        </div>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia.</p>

                </div>
             </SwiperSlide>

             <SwiperSlide>
                <div className={style.Testimonial_Container}>
                    <div className={style.profile}>
                        <img src={profile3} alt="" />
                        <div className={style.detail}>
                        <span>
                                Aniket Prasad
                         </span>
                         <div className={style.ratings}>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-fill'></i>
                          <i className='ri-star-half-fill'></i>
                          <i className='ri-star-line'></i>

                        </div>
                     </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia.</p>

                </div>
             </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial