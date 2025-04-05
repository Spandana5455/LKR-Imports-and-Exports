import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Consolidationwarehousing.css';
import warehousingimage from './images/warehousingimage.png';

const Consolidationwarehousing = () => {
    const advantages = [
        { title: "Flow of Cash", text: "Allows for smaller and more frequent purchase orders, which frees up cash flow. Suppliers frequently offer minimal quantities domestically." },
        { title: "Several Vendors", text: "Combine products from several manufacturers and/or suppliers into a single shipment." },
        { title: "Quality Assurance", text: "To strengthen vendor control, introduce quality controls early in the supply chain." },
        { title: "Just-in-time", text: "Ship products as needed. Or wait for additional items to be prepared." },
        { title: "Dropship directly", text: "Dropship directly from the Chinese warehouse to the final customer, securely encapsulating your supplier data." },
        { title: "Keep Track of Orders", text: "Big businesses with consistent large volumes can prioritize urgent orders first and track all order compilations." },
        { title: "Schedule Flexibility", text: "Capable of making perfect plans. Schedules of departure after every item has reached the warehouse." },
        { title: "Adaptability to FCL", text: "Flexibility to collaborate with other vendors who only offer complete container cargoes." }
    ];
    return (
        <>
        <div className="consolidation-warehousing-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="consolidation-warehousing-item">Organizing and 
                    <br/>Storing</h1>
                </div>
            </div>
        </div>

        <div className="organizing-storing-section">
            <div className="container">
                <h2 className="organizing-storing-heading pt-4">Organizing and Storing</h2>
                <p className="organizing-storing-body pt-4">Is It Beneficial for Your Company to Combine and Store Your Order at China Origin?Cargo consolidation: what is it?  
                    Combining cargo from many shippers into a single air or ocean shipment is known as cargo consolidation.  
                    Because bulk rates are applied when multiple cargo ships are operating simultaneously, this results in cost savings. 
                </p>
                <p className="organizing-storing-body">Why store and consolidate in China?  Consolidating and warehousing at the point of origin can boost revenue and improve the efficiency of your business. </p>
                <p className="organizing-storing-body">If I purchase a whole load from a single supplier, do I still need a warehouse?  YES AND NO: Yes, if you wish to manage inventory availability and 
                    quality prior to shipments.  AND NO, if you wish to load the items as soon as they are ready following factory inspection. 
                </p>
                <p className="organizing-storing-body">We can assist you in scheduling the completion of production. We can request that each plant deliver to the warehouse once they have produced 
                    enough goods to fill a container.
                </p>
                <p className="organizing-storing-body-lastnote">Free Warehousing: All of our clients who have chosen to use our inspection services are eligible for free warehousing for up to one week.</p>
            </div>
            <br/>
        </div>

        <div className="warehousing-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="warehousing-text text-center">"Our 
                        <br/>consolidation 
                        <br/>services are 
                        <br/>thought to be 
                        <br/>extremely 
                        <br/>helpful."</h1>
                </div>
                <div className="col-md-6">
                    <img src={warehousingimage} className="warehousing-img" alt="warehousing" />
                </div>
            </div>
        </div>
        </div>


        <div className="container mt-4">
            <h2 className="text-center mb-4 advantages-heading">Advantages</h2>
            <div className="row">
                {advantages.map((advantage, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                        <div className="card advantages-card border-0 h-100">
                            <div className="card-header border-0 advantages-title fw-bold">
                                {advantage.title}
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text advantages-body">{advantage.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Consolidationwarehousing;