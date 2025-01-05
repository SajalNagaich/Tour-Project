import React from 'react'
import style from './../footer/fotter.module.css'

const Footer = () => {
  return (
    <div className={`${style.CalltoAction_wrapper} section`}>
        <h2>Explore Iconic Popular Destination <br />
          with Expert Insides
        </h2>
        <button>Book Adventure</button>
    </div>
  )
}

export default Footer