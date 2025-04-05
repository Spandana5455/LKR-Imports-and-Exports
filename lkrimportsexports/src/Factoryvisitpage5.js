import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Factoryvisitpage5.css';

const Factoryvisitpage5 = () => {
    return (
        <>
        <div className="factory-visit-section">
            <div className="row align-items-center" style={{ minHeight: "100vh" }}></div>
        </div>

        <div className="container my-5">
        <h2 className="text-center fw-bold mb-4 factoryvisit-head">Services for Chinese Factory Visits</h2>
        <div className="row">
          <div className="col-lg-12 p-4 position-relative" style={{ backgroundColor: "#003AA580", color: "black", borderRadius: "3px" }}>
            <h5 className="factory-visit-heading fw-bold">Are you planning a trip to China's factories?</h5>
            <p className="factory-visit-body">
              We are able to arrange anything for your 
              <br/>visit. From picking you up at the airport to 
              <br/>making hotel
              reservations and scheduling 
              <br/>a meeting with important managers or 
              <br/>factory owners.
            </p>
            <p className="factory-visit-body">
            It takes a lot of preparation to visit the factory.  You'll lose time doing all of this.  
            Simply provide us the list of factories you plan to visit, and we'll take care of the rest.  
            Your homework will be completed by us.  Your decision on which factories to visit will be aided by thorough research and background checks.  
            Here we are, and we will inform you of the key factors that will
            </p>
      
           
            <div 
              className=" position-absolute" 
              style={{ 
                backgroundColor: "#003AA580", 
                color: "white", 
                borderRadius: "3px", 
                top: "32%", 
                right: "1%", 
                transform: "translateY(-60%)",
                width: "45%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h5 className="factory-visit-heading fw-bold text-center">We will guarantee that you would:</h5>
              <ul className="mt-3 factory-visit-points">
                <li>In the smallest amount of time, view the most factories.</li>
                <li>Every detail of the trip, including the scheduled route.</li>
                <li>Have our manager go with you to the translation and negotiation sessions.</li>
                <li>Going to Yiwu market and Canton Fair to improve sourcing.</li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
        <br/>

        <h2 className="text-center fw-bold factoryvisit-head">What is the purpose of visiting your suppliers?</h2>
        <br/>
        <ul className="factory-visit-points">
            <li>You can cut down on how long you communicate with suppliers (for example, from two months to five days).   Words are never as good as a personal touch and feel.</li>
            <li>The ability to assess vendors and their suitability for you will be available to you.  You can see how management interacts with one another and meet the boss, which might assist you resolve minor issues with your orders later on.</li>
            <li>After 16 years of personal experience, you will have the opportunity to tour the manufacturing facilities and verify the factories' capabilities and progress. Sometimes, the information a supplier sends you via email may not be accurate, particularly when it comes to how much and how quickly they can produce.  Get concepts for new or additional products.</li>
            <li>Additionally, your visit will demonstrate to the supplier your want to be in charge and stay informed.  Better working productivity and higher-quality orders will result from this.</li>
            <li>The quotes you may have received from a supplier may occasionally differ greatly from the prices you receive when you visit them. This is because, based on 16 years of personal experience, suppliers typically offer you very reasonable pricing because they know you will also visit their rivals.</li>
            <li>Long-term communication between you and your suppliers will increase as a result of their perception of your resolve and honesty in placing orders.</li>
        </ul>

        <h2 className="text-center fw-bold factoryvisit-head">6 Pointers for Travelling to Chinese Factories</h2>
        <br/>
        <br/>
        <div className="pointers-section">
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">The planned itinerary calls for travelling all day.</h5>
                        <p className="factoryvisit-body">We create a thorough travel plan and make travel reservations straight from the airport itself because China's industrial districts are generally dispersed across large distances, making a full list feasible </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">First-hand Short List </h5>
                        <p className="factoryvisit-body">We select the best factories so you don't have to waste time on pointless calculations.  Our proprietory approach of evaluations based on your requirements is used for the shortlisting process.</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">Supplier for Audits </h5>
                        <p className="factoryvisit-body"> If the final supplier has the required legal licenses, certifications, and Non-Disclosure Agreements (NDAs), we will assist you in auditing them.</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">Posing Appropriate Questions </h5>
                        <p className="factoryvisit-body">To make the most of your visit, prepare a list of questions and expectations for your providers.  After all, asking questions and resolving manufacturing-related difficulties is the main objective for the trip.</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">Beyond a Factory Tour </h5>
                        <p className="factoryvisit-body">Observing Only What Is Displayed  It is not acceptable to merely see what the provider wants you to see at the factory.  Our clients are advised to investigate every aspect of business.  The supplier only plans to display the properties that they believe meet your requirements.</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h5 className="factory-visit-heading fw-bold text-center">Broker or Trading Company</h5>
                        <p className="factoryvisit-body">Assuming You're Actually at the Right Factory. Don't be shocked to know lots of trading company claim that they own this factory (Its Ok to buy from trading complanies but not liars). On occasion we also have come across visiting the same factory twice or even thrice claiming they own it.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </>
      

    )
}

export default Factoryvisitpage5;