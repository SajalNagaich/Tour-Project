import React from 'react'
import style from './../About/about.module.css'

import aboutImg from './../../assets/about-bg.png'

const About = () => {
  return (
    <div className={` ${style.about_wrapper} section`}>
        <div className={style.about_image}>
            <img src={aboutImg} alt="about-img" />
        </div>

        <div className={style.about_content}>
            <h2>Discover Organized <br /> Adventure the ,<br /> Ultimate Travel Hack </h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto, doloribus deserunt hic totam omnis dolorum sapiente sequi nobis ratione! </p>


                <div className={style.about}>
                    <p><i className="ri-building-4-line"></i> Accommodation</p>
                    <p><i className="ri-car-line"></i> Transpotation allowance</p>
                    <p><i className="ri-magic-line"></i> Exclusive Experiences</p>
                    <p><i className="ri-instance-line"></i> Local recommandation</p>
                    <p><i className="ri-pin-distance-line"></i> personalized trip crafting</p>
                    <p><i className="ri-phone-line"></i> 27/7 Support</p>

                </div>
          </div>
    </div>
  )
}

export default About