import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sourcing.css';
import './images/sourcing.png';
import ps1 from './images/ps1.png';
import ps2 from './images/ps2.png';
import ps3 from './images/ps3.png';
import ps4 from './images/ps4.png';
import ps5 from './images/ps5.png';
import ps6 from './images/ps6.png';
import ps7 from './images/ps7.png';
import ps8 from './images/ps8.png';
import ps9 from './images/ps9.png';


const categories = [
    { title: "Home Furniture", img: ps1 },
    { title: "Planning & Design", img: ps2 },
    { title: "Kitchens & Wardrobes", img: ps3 },
];
const carddata = [
    { title: "Builders Projects", img:ps4 },
    { title: "Floors & Walls", img:ps5 },
    { title: "Office Furniture", img:ps6 },
]
const carddata2 = [
    { title: "School Furniture", img:ps7 },
    { title: "Restaurant Furniture", img:ps8 },
    { title: "Hotel Furniture", img:ps9 },
]

const Sourcing = () => {
    return (
        <>
        <div className="sourcing-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="sourcing-item mb-2 text-center">Projects Using Furniture
                    <p className="sourcing-text mt-2 text-center">Chinese Product Samples: A Comprehensive Guide  By importing from China at incredibly low prices, we have been helping villas, apartments, 
                        schools, stadiums, hospitals, hotels, and companies save a significant amount of money.  Some of the beauties are typically handcrafted 
                        without the use of glue or nails, which increases their durability and extends their lifespan.
                    </p></h1>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <h2 className="sourcing-heading">Where in the world is the finest location to purchase furniture in bulk ?</h2>
            <h5 className="sourcing-head">Without a question, China is the world's biggest supplier of furniture.</h5>
            <p className="sourcing-body">Did you know that a whole town in China is devoted to the production and selling of furniture?  
                <br/>
             A huge furniture wholesale market spanning more than 3 million square meters is proudly located in Lecong, Shunde's megacenter for furniture 
             production and distribution.
            </p>
            <p className="sourcing-body">Tuanyi International Furniture City, Sunlink Group, Shunde Empire Group, Lecong International Furniture Exhibition Centre, and Louvre Furniture Mall 
                are a some of the well-known furniture wholesale marketplaces in Lecong.  It has drawn more than 1,500 furniture makers and 3,450 furniture merchants 
                due to its overwhelming magnitude. 
            </p>
            <p className="sourcing-body"> A wide variety of home goods are available at Lecong Furniture Wholesale Centre, including sanitary ware, furniture accessories, materials and furniture 
                for bedrooms, living rooms, dining rooms, bathrooms, kitchens, hotels, restaurants, café chairs and bar stools.
            </p>
        </div>

        <div className="py-5 background-section-one"> 
      <div className="container">
        <div className="row justify-content-center">
          {categories.map((card, index) => (
            <div className="col-md-4 d-flex justify-content-center" key={index}>
              <div className="card shadow-lg rounded sourcing-card">
                <img
                  src={card.img}
                  className="card-img-top sourcing-image"
                  alt={card.title}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h5 className="card-title fw-bold sourcing-title mb-2">{card.title}</h5>
                  <div className="sourcing-button">
                  <button className="btn sourcing-knowmore">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="py-5 background-section-two"> 
      <div className="container">
        <div className="row justify-content-center">
          {carddata.map((card, index) => (
            <div className="col-md-4 d-flex justify-content-center" key={index}>
              <div className="card shadow-lg rounded sourcing-card-two">
                <img
                  src={card.img}
                  className="card-img-top sourcing-image"
                  alt={card.title}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h5 className="card-title fw-bold sourcing-title mb-2">{card.title}</h5>
                  <div className="sourcing-button">
                  <button className="btn sourcing-knowmore">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    <div className="py-5 background-section-one"> 
      <div className="container">
        <div className="row justify-content-center">
          {carddata2.map((card, index) => (
            <div className="col-md-4 d-flex justify-content-center" key={index}>
              <div className="card shadow-lg rounded sourcing-card">
                <img
                  src={card.img}
                  className="card-img-top sourcing-image"
                  alt={card.title}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h5 className="card-title fw-bold sourcing-title mb-2">{card.title}</h5>
                  <div className="sourcing-button">
                  <button className="btn sourcing-knowmore">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <br/>
    <br/>
        </>
    )
}

export default Sourcing;