import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Orderproduction.css';
const Orderproduction = () => {
    return (
        <>
        <div className="order-production-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="order-production-item">Purchases & 
                    <br/>Manufacturing
                    <p className="order-production-text"> Manufacturing is more than just putting parts together. It's coming up with ideas, 
                        testing principles, and perfecting the engineering as well as final assembly." - James Dyson
                    </p>
                    </h1>
                </div>
            </div>
        </div>

        <div className="placing-order-section">
            <div className="container my-4">
            <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                <h2 className="placing-order-heading text-center my-4">How to manage your orders in china</h2>
                <h2 className="placing-order-heading text-start">Placing order</h2>
                <p className="placing-order-text">Product Details
                    <br/>Measurement
                    <br/>Measurements must be in mm or cm.
                </p>
                <p className="placing-order-text"><strong>Colors </strong> Hexadecimal or Pantone color codes </p>
                <p className="placing-order-text"><strong>Resources </strong>
                <br/>Indicate the precise substance that will be utilized in each component of the product.  (Metal, fabric, or plastic are too general.)
                </p>
                <p className="placing-order-text"><strong>Certification </strong>
                <br/>Please list any certifications or test reports that your product may need.  When placing the order, any applicable legal compliance must also be taken into account.  
                </p>
                <p className="placing-order-text"><strong>Power and plugs </strong>
                <br/>It is necessary to specify the specifications for electrical and non-electrical goods.
                </p>
                <p className="placing-order-text"><strong>Packing </strong>
                <br/>Establish packing and packaging guidelines as needed.
                </p>
                <p className="placing-order-text"><strong>Applications</strong>
                <br/>It is necessary to specify environmental requirements, applications, and safety compliance.
                </p>
                </div>
            </div>
            <br/>
            <br/>
        </div>

        <div className="discuss-price-section">
            <div className="container">
                <h2 className="discuss-price-heading text-start">Discuss the price. </h2>
                <p className="discuss-price-text pt-2">Maintaining more reasonable expectations makes it easier to adjust prices without returning with inaccurate information.</p>
                <p className="discuss-price-text">Your willingness to spend has a direct impact on the product's quality.  Watch out—unless your target price is extremely ridiculous, factories in China will never say "no."</p>
                <p className="discuss-price-text">Yes, we are all aware that quantity determines price.  </p>
                <p className="discuss-price-text">It's time to place your order once you've calculated how much inventory you'll need and how much it will cost.  Make sure you fulfill the minimum order quantity before placing your order. </p>
            </div>
            <br/>
            <br/>
        </div>
        
        <div className="dates-of-delivery-section">
            <div className="container">
                <h2 className="dates-of-delivery-heading">Dates of Delivery </h2>
                <p className="dates-of-delivery-text"> Unless otherwise specifically specified in writing, such as the date indicated on the order confirmation or sales contract, all delivery dates 
                  and deadlines are non-binding.  Only after advance payment do the written delivery dates become operative.  The products will be supplied within 
                  a reasonable amount of time after the seller notifies the buyer that they are prepared for delivery, unless a specific date is specified. 
                </p>
                <p className="dates-of-delivery-text">In China, delivery dates are typically not taken seriously.  We have to follow up with their productions to remind them of the delivery 
                  schedules if the material ordered is urgent.</p>
            </div>
            <br/>
            <br/>
        </div>

        <div className="terms-of-payment-section">
            <div className="container">
                <h2 className="terms-of-payment-heading">Terms of Payment </h2>
                <p className="terms-of-payment-text pt-2">We must first confirm factories' credentials before we can pay them.  The standard arrangements are to pay a 30% deposit to the factory or 
                    factories for the goods when we have established this and completed all pertinent contracts with them.  After the products pass our quality 
                    control inspections and are delivered to our warehouse prepared for export, the remaining amount is then paid.  The remaining 70% will be 
                    paid after the goods are received.
                </p>
                <p className="terms-of-payment-text">If the supplier has purchased components and raw materials with 70% of his sale price after only receiving a 30% deposit from us, he will need 
                    to give your requirements additional consideration.  Additionally, this gives us negotiating advantage in the future.  We will never make the 
                    remaining payment until the product inspection has verified the quality.
                </p>
            </div>
            <br/>
            <br/>
        </div>

        <div className="follow-up-section">
            <div className="container">
                <h2 className="follow-up-heading text-center">Follow-up on Production </h2>
                <p className="follow-up-text text-center">Following up on production can take weeks or months, which is more time than finding a supplier.  
                    The last thing you want is to waste time and effort constantly monitoring production.
                </p>
                <p className="follow-up-text text-center">Our group would assist you in: </p>
                <p className="follow-up-text text-center">Keep an eye on production updates. 
                    <br/>Frequently  Talking about manufacturing changes with factories 
                    <br/>Get notified when the production process is complete. 
                    <br/>Pay the remaining balance for production. 
                </p>
            </div>
            <br/>
            <br/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <h1 className="potential-heading">What 
                        <br/>Potentially 
                        <br/>Could Go 
                        <br/>Wrong in 
                        <br/>Production?</h1>
                </div>
                <div className="col-md-6">
                    <br/>
                <strong className="potential-head">"Almost Anything" </strong>
                <p className="potential-text pt-2">Making sure every process runs successfully every time you go into production is really challenging. </p>
                <p className="potential-text">Shipments may arrive late if orders are processed using the wrong instructions or with subpar raw materials.
                    <br/>No matter how simple the production order is, there are still a number of reasons why delays can happen. 
                </p>
                <p className="potential-text"> We will manage order risk assessment, order management, and a follow-up plan that we and the factory have agreed upon with the aid of our due diligence.</p>
            </div>
            </div>
            <br/>
            <br/>
        </div>

        
      <div className="row g-2">
        {/* Packing & Loading Supervision */}
        <div className="col-md-3">
          <div className="card process-card">
            <div className="card-body">
              <h5 className="card-title text-center">Packing & Loading Supervision</h5>
              <p className="card-subtitle text-danger">1 to 2 days</p>
              <p className="card-text">
                Confirmation of the packaging,</p>
                <p>Boxes are randomly selected for visual product inspection.</p>
                <p>Confirmation of the amounts placed in the container.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="col-md-3">
          <div className="card process-card">
            <div className="card-body">
              <h5 className="card-title text-center">Quality Control</h5>
              <p className="card-subtitle text-danger">2 TO 4 Days</p>
              <p className="card-text">
                Getting the inspection ready,</p>
                <p>An Asiaction inspector conducted a factory inspection.</p>
                <p>The client received a complete report.
              </p>
            </div>
          </div>
        </div>

        {/* Order Preparation */}
        <div className="col-md-3">
          <div className="card process-card">
            <div className="card-body">
              <h5 className="card-title text-center">Order Preparation</h5>
              <p className="card-subtitle">1 TO 2 Weeks</p>
              <p className="card-text">
                Your supply chain strategy should be planned,</p>
                <p>Finalizing the terms of the purchase agreement with suppliers,</p>
                <p>The deposit is paid.
              </p>
            </div>
          </div>
        </div>

        {/* Production Follow Up */}
        <div className="col-md-3">
          <div className="card process-card">
            <div className="card-body">
              <h5 className="card-title text-center">Production Follow Up</h5>
              <p className="card-subtitle text-danger">1 to 12 weeks</p>
              <p className="card-text">
                Preventing risks and managing issues,</p>
                <p>If required, factory visits, notifications to customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>

        </>
    )
}

export default Orderproduction;