import React from 'react'
import style from './../Searches/search.module.css'

const Search = () => {
  return (
    <div className={`${style.search_wrapper} section`} id="searches">
        <h2>Populer Searches</h2>

        <div className={style.Cards}>
            <div className={style.card}>
                <i className="ri-search-line"></i>

                <h3>Domestic Trips <span>See America In a New Light</span></h3>
            </div>

            <div className={style.card}>
                <i className="ri-search-line"></i>

                <h3>Vacation in 14 Days <span>Limited Availability and Seling Fast </span></h3>
            </div>

            <div className={style.card}>
                <i className="ri-search-line"></i>

                 <h3>Offer for Traveling Groups <span> Save When you 9+ Guests </span></h3>
            </div>

            <div className={style.card}>
                <i className="ri-search-line"></i>

                 <h3> Tours Under $2000 <span> Browse Our Value Vacations </span></h3>
             </div>

            <div className={style.card}>
                <i className="ri-search-line"></i>

                 <h3> Past Guests Benifits <span> Saving With Global Tour Rewards </span></h3>
            </div>

            <div className={style.card}>
                <i className="ri-search-line"></i>

                 <h3> Past Guests Benifits <span> Saving With Global Tour Rewards </span></h3>
            </div>

            
   
        </div>
    </div>
  )
}

export default Search