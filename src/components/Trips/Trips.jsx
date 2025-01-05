import React from 'react'
import style from './../Trips/trips.module.css'

import trip01 from './../../assets/Trips01.jpg'
import trip02 from './../../assets/Trips02.jpg'
import trip03 from './../../assets/Trips03.jpg'
import trip04 from './../../assets/Trips04.jpg'
import trip05 from './../../assets/Trips05.jpg'
import trip06 from './../../assets/Trips06.jpg'
import trip07 from './../../assets/Trips07.jpg'
import trip08 from './../../assets/Trips08.jpg'


const Trips = () => {
  return (
    <div className={` ${style.trips_wrapper} section`}>
        <h2>Popular Trips</h2>

        <div className={style.cards}>
            <div className={style.card}>
                <img src={trip01} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>Australia Panoroma</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 7 days </span>
                        <span><i className="ri-map-pin-line"></i> 5 places </span>
                        <span><i className="ri-flag-line"></i> Australia </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $1,200</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip02} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <i className="ri-star-line"></i>
                    </div>

                    <h3>Best Of Spain</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 7 days </span>
                        <span><i className="ri-map-pin-line"></i> 5 places </span>
                        <span><i className="ri-flag-line"></i> Spain </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $1,840</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip03} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>Australia Panoroma</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 9 days </span>
                        <span><i className="ri-map-pin-line"></i> 6 places </span>
                        <span><i className="ri-flag-line"></i> Italy </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $3,670</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip04} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>Canyonlands</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 7 days </span>
                        <span><i className="ri-map-pin-line"></i> 5 places </span>
                        <span><i className="ri-flag-line"></i> Canyonlands </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $2,400</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip05} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3> India </h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 10 days </span>
                        <span><i className="ri-map-pin-line"></i> 25 places </span>
                        <span><i className="ri-flag-line"></i> India </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $3,550</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip06} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>France Descovry</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 4 days </span>
                        <span><i className="ri-map-pin-line"></i> 5 places </span>
                        <span><i className="ri-flag-line"></i> France </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $900</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip07} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>Japn in Work</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 7 days </span>
                        <span><i className="ri-map-pin-line"></i> 4 places </span>
                        <span><i className="ri-flag-line"></i> Japan </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $2,000</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <img src={trip08} alt="" />
                <div className={style.TripContent}>
                    <div className={style.rating}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>

                    <h3>Explore Bali 10-Days Tour</h3>

                    <div className={style.TripDetails}>
                        <span><i className="ri-calender-line"></i> 10 days </span>
                        <span><i className="ri-map-pin-line"></i> 25 places </span>
                        <span><i className="ri-flag-line"></i> Bali </span>

                    </div>

                    <div className={style.Pricing}>
                        <span className={style.price}> $2,800</span>
                        <button className={style.book}> Book Now</button>
                    </div>
                </div>
            </div>  



        </div>
    </div>
  )
}

export default Trips