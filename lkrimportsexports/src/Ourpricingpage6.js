import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourpricingpage6.css';


const Ourpricingpage6 = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 our-pricing-heading">Easy Prices for All</h2>
      <br/>

      <div className="row gap-2">
        {/* Card 1 */}
        <div className="col-md-4 mb-4 ourpricing-card-body">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="ourpricing-card-title">Product Sourcing 
                <br/>0% Service Fee</h5>
              <p className="our-pricing-head fw-bold">Free*</p>
              <p className="our-pricing-head-two">Designed for First-time Buyers</p>
              <ul className='our-pricing-points'>
                <li>Free Product Sourcing*</li>
                <li>Finding Best Supplier in China</li>
                <li>Negotiation with Supplier</li>
                <li>Only 1 free quote on Landed Cost</li>
                <li>*$300 security deposit required for Free Sourcing</li>
              </ul>
            </div>
            <div className="card-footer bg-white border-0">
              <button className="pay-now-button">Pay Now</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4 ourpricing-card-body">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="ourpricing-card-title">Complete Door to Door 
                <br/>5-10% Service Fee</h5>
              <p className="our-pricing-head fw-bold">Service Charges Starts from $400</p>
              <p className="our-pricing-head-two">Importer Who wants us to Handle From Sourcing to Door Step Delivery</p>
              <ul className='our-pricing-points'>
                <li>Multiple Order Consolidation</li>
                <li>No IEC Certificate Required</li>
                <li>China Factory Visit Assistance*</li>
                <li>*$1500 Min Order Required for Factory Visit Assistance</li>
              </ul>
            </div>
            <div className="card-footer bg-white border-0">
              <button className="pay-now-button">Pay Now</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4 ourpricing-card-body">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="ourpricing-card-title">Supply Chain Handling  
                <br/>3-7% Service Fee</h5>
              <p className="our-pricing-head fw-bold">Min Order From as Low as $8000</p>
              <p className="our-pricing-head-two">Experienced Importer having their Own Suppliers</p>
              <ul className='our-pricing-points'>
                <li>Multiple Order Consolidation</li>
                <li>Free Warehouse for 15 days</li>
                <li>Shipping & exports</li>
                <li>Inspection Services for 3% Additional*</li>
                <li>Inspection Fee is mandatory for All Multiple Orders Consolidation and Mixed Container Service</li>
              </ul>
            </div>
            <div className="card-footer bg-white border-0">
              <button className="pay-now-button">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <h2 className="ourpricingbody text-start">ImpexSourcing provides clear, affordable pricing with no additional fees.  They provide reasonable prices based on order value and demand a $300 Refundable Security Deposit for their services.  They manage several suppliers, goods, and plans for large orders.  They perform quality checks and provide free storage for seven days to two months.  Quick product costing is made possible by their in-house costing matrix, which also provides adjustable charges, local currency payment, and no hidden commissions.  No import or export permission is necessary, saving time and money.</h2>
    </div>
  );
};

export default Ourpricingpage6;
