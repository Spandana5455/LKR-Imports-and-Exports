import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Ourstory.css';
import ourstory from './images/ourstory.png';


const Ourstory = () => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6 text-center">
          <h1 className="fw-bold our-story-heading">About Us</h1>
          <img src={ourstory} alt="Team Meeting" className="our-story-img" />
          <h3 className="fw-bold our-story-promise">Our Promise</h3>
          <p className="our-story-body">
            Our success is your success. Our goal with each project is to provide:
            <ul className="list-unstyled">
              <li>• Communication clarity and quality control</li>
              <li>• Trust in each shipment</li>
            </ul>
          </p>
        </div>
    
        <div className="col-md-6 my-4 our-story-theory">
          <h3 className="fw-bold our-story-head">Our Story</h3>
          <p className="our-story-body">
          Since our founding in 2024, our goal has been straightforward: to make the intricate and frequently dangerous process of importing from China easy, safe, and stress-free.
          </p>
          <h3 className="fw-bold our-story-head">What We Do</h3>
          <p className="our-story-body">
            In order to meet your business needs, we provide end-to-end import solutions.  Whether you are managing a large-scale manufacturing or sourcing a single component, we can help.We provide the following services:
            <br/>
            Developing and designing products
            <br/>
            finding factories and verifying suppliers
            <br/>
            Compliance and Quality Control
            <br/>
            Delivery & logistics
            <br/>
            Total project administration
            <br/>
            So you don't have to, we take care of everything, from industrial machinery to a basic pin.
          </p>
          <h3 className="fw-bold our-story-head">Why Choose Us?</h3>
          <p className="our-story-body">
          Deep local knowledge and a solid network of trustworthy suppliers throughout China are our main advantages.  Our skilled local staff, situated in the centre of China's manufacturing zone, guarantees:
          <br/>Selecting a factory with care from a large, verified database
          <ul className="list-unstyled">
            <li>• Clear supplier insights that include past performance</li>
            <li>• Strict quality control throughout</li>
            <li>• Risk reduction for delays, fraud, and quality problems</li>
          </ul>
          </p>
          <p className="our-story-body">As your partner on the ground, we operate with accuracy, commitment, and clarity so you can concentrate on expanding your company while we take care of the rest.</p>
        </div>
        </div>
    </div>
  );
};

export default Ourstory;
