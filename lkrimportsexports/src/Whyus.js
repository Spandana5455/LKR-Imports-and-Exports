import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Whyus.css'; 
import suits from './images/suits.png';
import leaira from './images/leaira.png';
import mindclues from './images/mindclues.png';
import lebestow from './images/lebestow.png';

const clients = [
    {
      logo: suits, 
      title: "The suits and salon",
      description:
        "LKR Imports and Exports imports furniture for high-end salon owners and beauty spa operators, seeking stylish, durable furnishings for their spaces. They import salon-specific items like styling chairs, shampoo stations, and lounge seating. They offer customized sourcing solutions, timely delivery, and after-sales support to meet unique client requirements.",
    },
    {
      logo: leaira,
      title: "Le Aira events",
      description:
        "LKR Imports and Exports offers premium furniture solutions to Le Aira Events, a leading event design and coordination company. They provide elegant chairs, banquet tables, lounge pieces, LED screens, and decorative event structures for upscale events like weddings, galas, and corporate gatherings.",
    },
    {
      logo: mindclues,
      title: "Mind clues",
      description:
        "LKR Imports and Exports offers premium furniture solutions to Le Aira Events, a leading event design and coordination company. They provide elegant chairs, banquet tables, lounge pieces, LED screens, and decorative event structures for upscale events like weddings, galas, and corporate gatherings.",
    },
    {
      logo: lebestow,
      title: "Lebestow",
      description:
        "For cohabitation, LKR Imports and Exports imports top-notch electronics and furnishings. With an emphasis on comfort, tech-enabled living, and space optimization, these pieces are carefully chosen for co-living environments. Thoughtfully planned living areas, quick setup times, and effective home outfitting are all made possible by the simplified import procedure and customized product options.",
    },
];

const Whyus = () => {
    return (
        <>
        <div className='container my-5'>
            <div className='text-start'>
                <h1 className=" whyus-heading">Welcome 
                    <br/>
                    to 
                    <br/>
                    LKR IMPORTS & EXPORTS </h1>
            </div>
            <div className="text-start">
                <h2 className="whyus-head">What we can offer you is as follows: </h2>
                <ul className="whyus-points">
                    <li>Are you curious about the strategies of your rivals?</li>
                    <li>Locate the goods that interest you.</li>
                    <li>Find possible vendors and acquire a catalog, samples, costs, and terms of payment. </li>
                    <li>We will ensure that imported goods fulfill all applicable national regulations.  (Labeling, weights and measurements, quality certifications, etc.)</li>
                    <li>Inspecting the products in the factory and providing you with a thorough report prior to shipment. </li>
                    <li>Money transfers and advances:  Therefore, dealing with foreign currencies is not necessary. </li>
                    <li>In every Indian port, our customs clearance staff will help with importing.</li>
                    <li>To determine a landing cost, we shall create a cost analysis.</li>
                    <li>Acquire the goods and maintain the documentation. </li>
                </ul>
            </div>
        </div>

        <div className="container my-4">
        <h2 className="ourclients-heading">Our clients</h2>
        <br/>
            <div className="row">
                {clients.map((client, index) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={index}>
                        <div className="text-center clients-card">
                            <img src={client.logo} alt={client.title} className="mx-auto clients-img d-block"/>
                            <div className="card-body">
                                <h5 className="card-title clients-title">{client.title}</h5>
                                <p className="card-text clients-text">{client.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Whyus; 