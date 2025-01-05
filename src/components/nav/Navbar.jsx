import React, { useRef } from 'react'
import style from '../nav/navbar.module.css'
const Navbar=()=> {

    const menu = useRef();

    const MenuHandler = () =>{

        menu.current.classList.toggle(style.activeMenu)
    }


  return (
    <div className={style.Nav_wrapper}>
        <div className={style.logo}>
            <a href="#">RAS Tour <span>.</span></a>
        </div>

        <ul ref={menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Trips</a></li>
            <li><a href="#">Destination</a></li>
            <li><a href="#">Serches</a></li>
            <li><a href="#">About</a></li>           
            <li><a href="#">Popular Location</a></li>
        </ul>

        <div className={style.nav_btns}>
            <div className={style.search_wrapper}>
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search Places" />  
        </div>

        <div className={style.CallBtn}>
            <i className="ri-phone-line"></i>
            <p>+1 1800 25 2266 <small>Call Your Travel Agent</small></p>
         </div>

            <i className="ri-menu-2-line"  onClick={MenuHandler} id={style.bars}></i>
        </div>
     </div> 
  )
}

export default Navbar