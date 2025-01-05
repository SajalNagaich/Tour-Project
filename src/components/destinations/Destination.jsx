// import React from 'react'
// import style from './../destinations/destination.module.css'

// import destination01 from './../../assets/Destination01.jpg'
// import destination02 from './../../assets/Destination02.jpg'
// import destination03 from './../../assets/Destination03.jpg'
// import destination04 from './../../assets/Destination04.jpg'
// import destination05 from './../../assets/Destination05.jpg'
// import destination06 from './../../assets/Destination06.jpg'


// const Destination = () => {
//   return (
//     <div className={` ${style.Destination_wapper} section`}>
//         <h2>
//             Populer Destination
//         </h2>
        
//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination01} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>Europe</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination02} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>Asia</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination03} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>North-America</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination04} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>America</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination05} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>Australia</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className={style.DestinationCards}>
//             <div className={style.DestinationCard}>
//                 <img src={destination06} alt="img-destination" />

//                 <div className={style.DestinationDetails}>
//                     <h3>Africa</h3>
//                     <div className={style.btns}>
//                         <a href="#">All Destination</a>
//                         <a href="#">Deals</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Destination

import React from 'react';
import style from './../destinations/destination.module.css';

import destination01 from './../../assets/Destination01.jpg';
import destination02 from './../../assets/Destination02.jpg';
import destination03 from './../../assets/Destination03.jpg';
import destination04 from './../../assets/Destination04.jpg';
import destination05 from './../../assets/Destination05.jpg';
import destination06 from './../../assets/Destination06.jpg';

const destinations = [
  { id: 1, name: 'Europe', image: destination01 },
  { id: 2, name: 'Asia', image: destination02 },
  { id: 3, name: 'North America', image: destination03 },
  { id: 4, name: 'Latin America', image: destination04 },
  { id: 5, name: 'Australia', image: destination05 },
  { id: 6, name: 'Africa', image: destination06 },
];

const Destination = () => {
  return (
    <div className={`${style.destinationWrapper} section`}>
      <h2>Popular Destinations</h2>
      <div className={style.gridContainer}>
        {destinations.map((destination) => (
          <div key={destination.id} className={style.destinationCard}>
            <img src={destination.image} alt={`img-${destination.name}`} className={style.cardImage} />
            <div className={style.cardOverlay}>
              <h3>{destination.name}</h3>
              <div className={style.btnGroup}>
                <a href="#" className={style.btn}>All Destinations</a>
                <a href="#" className={style.btn}>Deals</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
