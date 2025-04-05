import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Shippingcustoms.css';
import shippingcustomstep from './images/shippingcustomstep.png'

const Shippingcustoms = () => {
    return (
        <>
        <div className="shipping-customs-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="shipping-customs-item">Delivery and customs 
                        <br/>processing
                        <p className="shipping-customs-text pt-2">Import Customs Clearance: A Comprehensive Guide  Why not hire a professional to handle all of your import and customs clearance headaches?  In all significant Indian ports, we will follow up on all the processes and finish the paperwork as quickly as possible.</p>
                    </h1>
                </div>
            </div>
        </div>
        <br/>

        <div className="steps-on-import-section">
        <div className="container py-5">
            <h2 className="text-center fw-bold steps-on-import-heading">6 Steps on Import Custom Clearing Services</h2>
            <h2 className="text-center fw-bold steps-on-import-heading">Making it Simple</h2>

      <div className="row mt-4">
        {/* Left Text Section */}
        <div className="col-md-7">
          {[
            {
              step: "Step 1",
              title: "Shipment arrives",
              description:
                "IGM Get Completed Bill of Entry Completed Checklist Generated The airway bill or bill of lading",
            },
            {
              step: "Step 2",
              title: "Documentation and Filing Process",
              description:
                "Purchase order/Letter of credit Technical write-up, literature, etc. Industry license, if applicable; Test reports, BIS, WPC, AZO, and Certificate of Origin, Certificate of Origin, Import License, and Insurance Certificate",
            },
            {
              step: "Step 3",
              title: "The Examination And Inspection Process:",
              description: `Green channel clearance, Appraisal Assessment Evaluation, Analyzing the Products, Bond Execution, Duty Payment`
            },
            {
              step: "Step 4",
              title: "Take Delivery",
              description: "Shipment DO, Port/CFS Charges, Out of Charge",
            },
            {
              step: "Step 5",
              title: "Transport Of Goods",
              description:
                "Obtain Insurance for Waybill Transport Documents Licenses and Permits",
            },
            {
              step: "Step 6",
              title: "Delivery To Your Warehouse",
              description: "Delivery of Items in a Risk-Free and Safe Way",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="fw-bold step-on-import-steps">{item.step}</h4>
              <h5 className="fw-bold step-on-import-title">{item.title}</h5>
              <p className="step-on-import-body">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="col-md-5 d-flex align-items-center">
          <img
            src={shippingcustomstep}
            alt="Import Process"
            className="img-fluid shadow custom-border-radius"
          />
        </div>
      </div>
      </div>
    </div>
    <br/>
        </>
    )
}

export default Shippingcustoms;