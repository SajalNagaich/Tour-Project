import React from 'react'
import style from './../footer/footer.module.css'

const Footer = () => {
  return (
    <div className={`${style.Footer_wrapper} section`}>
        <div className={style.top_container}>
            <div className={style.logo}>
                <a href="#">RAS TOUR</a>
            </div>
            <div className={style.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-youtube-line"></i>
            </div>
        </div>

        <div className={style.bottom_container}>        
            <div className={style.footerLinks}>
                <h3>About RAS Tour</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our History</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div className={style.footerLinks}>
                <h3>Destinations</h3>
                <ul>
                    <li><a href="#">USA</a></li>
                    <li><a href="#">Letin America</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">Africa</a></li>
                </ul>
            </div>

            <div className={style.footerLinks}>
                <h3>Suppert</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Request a Quote</a></li>
                    <li><a href="#">Booing Condition</a></li>
                    <li><a href="#">recommendations</a></li>
                </ul>
            </div>

            <div className={style.footerLinks}>
                <h3>Our NewsLetter</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, atque.</p>

                 <div className={style.inputWrapper}>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                 </div>
            </div>
          </div>
      </div>
  )
}

export default Footer