import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Airservicespage8.css';
import mcs1 from './images/mcs1.png';
import mcs2 from './images/mcs2.png';
import mcs3 from './images/mcs3.png';
import mcs4 from './images/mcs4.png';


const AccordionItem = ({ id, title, content }) => (
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed no-border"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
);

const Airservicespage8 = () =>{

    const faqData = [
        { id: "One", title: "From where do containers originate?", content: (
            <>
            <p>
                The following port is where our containers begin their journey.  (Contact our Business Development Manager for more details on container movements.)
            </p>
            <ul>
                <li>Ningbo & Yiwu</li>
                <li>Shenzhen & Guangzhou</li>
                <li>Foshan & Shunde </li>
            </ul>
            </>
        )
        },
        { id: "Two", title: "Which port in India do they arrive at?", content: (
            <>
            <p>Our Destination port of discharge for Mixed Containers is</p>
            <ul>
                <li>Chennai</li>
                <li>Nhava Sheva (Mumbai)</li>
            </ul>
            </>
        )
        },
        { id: "Three", title: "What time do they have scheduled?", content: (
            <>
            <p>They typically depart during the final week of each month, but our Business Development manager can assist you in finding out the precise date. </p>
            <p>Our mixed containers often depart once or twice a month.  and once every two months during the off-season.  The rate at which the container space fills up will determine all of this.</p>
            <p>Note: We would assist you in obtaining goods via LCL shipments in the event of an urgent or immediate delivery. </p>
            <p>When compared to LCL shipments, we promise that our mixed container will be the most affordable method of importation. </p>
            </>
        )
        },
        { id: "Four", 
            title: "Are LCL and Mixed Container Services Actually Different in Price?", 
            content: (
              <>
                <p>
                LCL shipments are calculated using either weight (kg) or volume (CBM), whichever is greater.  For LCL shipments, shipping companies offer enticingly inexpensive rates as low as $5 per CBM.  However, in practice, they don't disclose the additional expenses that you must pay at the port of destination.  Delivery orders, de-stuffing charges, CFS, and documentation fees are examples of hidden charges. In total, these charges can range from $160 to $1000 per CBM or more.
                <br/>
                Important: In the event that customs clearance is delayed, demurrage costs for LCL are extremely significant.  Charges for demurral begin on the fourth day after de-stuffing.  Nonetheless, FCL often offers a 7–21 day free detention period, which gives us plenty of time to complete the paperwork for you. 
                </p>
                <p>
                Common Services for Mixed Containers  Depending on the amount and ports, we charge you between Rs. 6000 and Rs. 8500 for 1 M2 ≤500 kg.
                </p>
              </>
            ) 
          },
          
        { id: "Five", title: "What is the estimated time of arrival for the goods?",content: (
            <>
            <p>It takes between 10 to 21 days to sail to India once the products are ready for shipment, and it will take us about 7 days to finish the customs procedures.  Therefore, from the day of shipment, the total time is 30 days.</p>
            </>
        )
    }
    ];

    return (
        <>
        <div className="mixed-air-services-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="mixed-air-services-text">Services for Mixed Air</h1>
                </div>
            </div>
        </div>
        <br/>

        <div className="container my-4">
            <div className="text-center">
                <h2 className="air-services-heading fw-bold">Services for Mixed Air</h2>
            </div>
            <br/>
            <h2 className="air-services-heading fw-bold">Combined multiple orders can save you a lot of money.</h2>
            <h5 className="air-services-head fw-bold">When it comes to Airfreight, there are two types of shipments:</h5>
            <h5 className="air-services-head fw-bold">Mode of Courier </h5>
            <p className="air-services-body">Door-to-door service is typically provided by all reputable courier services.</p>
            <h5 className="air-services-head fw-bold">Mode of Cargo </h5>
            <p className="air-services-body">From one airport to another </p>
            <p className="air-services-body">When compared to air cargo, courier can cost two to three times as much each sent unit.  the fact that, 
                in comparison to air cargo, the administrative cost-which accounts for a significant portion of the overall 
                shipping cost—is just as high for courier shipments. </p>
            <p className="air-services-body">Therefore, combining multiple separate courier shipments into a single air cargo package can result in significant cost savings.</p>
            <h5 className="air-services-head fw-bold">Mixed Air Service: </h5>
            <p className="air-services-body">We have developed a hybrid model in which we combine all of your products from several vendors into a single air cargo and send it to India.  In many situations, this is still less expensive than courier—nearly half as much.</p>
            <br/>
            <h2 className="air-services-heading fw-bold text-center">The key steps for how that operates are listed below.</h2>
            <br/>
            <h5 className="air-services-head fw-bold">1. Purchase from all suppliers in accordance with FOB or FCA conditions. </h5>
            <p className="air-services-body"> Without export clearance paperwork, your cargo cannot depart the nation.  We can acquire these documents in two ways: </p>
            <h5 className="air-services-head fw-bold">Option A: Place an FCA or FOB order </h5>
            <p className="air-services-body">FCA is for Free Carrier (export documentation, no shipping), and FOB stands for Free on Board (export documents and shipping to the port).</p>
            <p className="air-services-body"> Export clearance documentation will be provided by each supplier. </p>
            <h5 className="air-services-head fw-bold">Option B: Place an EXW order </h5>
            <p className="air-services-body">The export clearance documentation will not be supplied by the vendors.  Instead, Our Export company is in charge of this. </p>
            <p className="air-services-body">Since the supplier is often responsible for issuing the export papers, the second option may be more difficult.  With lithium batteries and other dangerous products, this isn't always simple.</p>
            <h5 className="air-services-head fw-bold">2. Arrange for delivery to our storage facility. </h5>
            <h5 className="air-services-head fw-bold"> Every shipment needs to be sent to the same loading port.  There are three methods for doing this: </h5>
            <h5 className="air-services-head fw-bold"> Option A: Place the order using FOB terms.</h5>
            <p className="air-services-body">This implies that every supplier schedules transportation to the loading port, such as Shenzhen.  The distance that the items must be transported determines the FOB charges. </p>
            <p className="air-services-body">The supplier bases their quotation on the nearest port when you request a "regular" FOB quote.Therefore, we must direct the supplier to:</p>
            <p className="air-services-body">a. Offer a FOB quote that covers transportation to a particular city
                <br/>
                b. Verify that port is designated as the loading port.
            </p>
            <h5 className="air-services-head fw-bold">Option B: Place the order in line with FCA regulations</h5>
            <p className="air-services-body">Although the supplier issues export clearance documents as part of FCA, the cargo is not moved from the manufacturer to the loading port.</p>
            <p className="air-services-body">Additionally, it enables you to ensure that the products are adequately insured for transit from the manufacturer to the loading port.</p>
            <h5 className="air-services-head fw-bold">Option C: Place the order in accordance with EXW terms</h5>
            <p className="air-services-body">Since EXW does not charge for shipping, they will provide you the best deal.  Each supplier will be given instructions to schedule transportation to our designated warehouses, where we will meticulously load and export every item.</p>
            <p className="air-services-body">Therefore, we must direct the supplier to:</p>
            <p className="air-services-body">a. Give an EXW price that covers transport to a particular city.
                <br/>
                b. We won't ask suppliers for any export documentation. 
            </p>
            <p className="air-services-body"> Small factories or goods without disadvantages that the Chinese government benefits from should ideally be exported by EXW; if there are no disadvantages to exporting, manufacturers may choose a simpler route.</p>
            <h5 className="air-services-head fw-bold">3. Ensure that suppliers' manufacturing is in sync.</h5>
            <p className="air-services-body"> Orders are often delayed by manufacturers.  For weeks at a time. </p>
            <p className="air-services-body">All shipments will be delayed if one supplier experiences a production delay. </p>
            <p className="air-services-body">Although the exact completion date of the manufacturing cannot be predicted, we must coordinate your orders to prevent long-term delays. </p>
            <p className="air-services-body">Because of this, products with longer lead times have to start manufacturing a few weeks earlier than those with shorter lead times. </p>
            <p className="air-services-body">Additionally, you should allow for possible delays by at least two weeks.</p>
            <h5 className="air-services-head fw-bold">4. Consolidate the goods into a single DAP or DDU shipment.</h5>
            <p className="air-services-body">We can send all shipments as a single air cargo once they reach the port of loading.</p>
            <p className="air-services-body"> Additionally, we will provide the packing list, commercial invoice, and bill of lading. </p>
            <p className="air-services-body">The export clearance documents that each supplier or the forwarder issues serve as the basis for this. </p>
            <p className="air-services-body">If there are numerous suppliers involved, this could take a few more days.</p>
            <h5 className="air-services-head fw-bold">Do you require assistance with customs and shipping?</h5>
            <p className="air-services-body">We are aware of how challenging it can be to comprehend the shipping and customs procedures, 
                particularly if you have never imported anything from Asia.  We developed the Starter Package to assist startups in 
                understanding the procedure, avoiding fraud, and avoiding overcharging shipping agents: Every week, our Mixed Air Service 
                departs from China.  We only require the packing list with the space volume (CBM) and weight (KGS) information, as well as a 
                proforma invoice and/or purchase contract from your supplier.  We will make room for you in our upcoming air cargo.
            </p>
            <p className="air-services-body">In order to save you money on your order, we bundle orders from other customers with a minimum order of USD 4000.   Included are the following services: </p>
            <ul className="air-services-points">
                <li>Air shipment handling</li>
                <li>Loading, Repackaging</li>
                <li>Loading Security</li>
                <li>Warehousing</li>
                <li>Co-packing, and cargo discharge</li>
            </ul>


            <div className="row text-center">
                <div className="col-md-3">
                    <img src={mcs1} alt="mcs1"/>
                    <br/>
                    <h5 className="containerserviceshead fw-bold">Place Several Orders Combining Different Orders</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs2} alt="mcs1"/>
                    <br/>
                    <h5 className="containerserviceshead fw-bold">Container for Mixed Materials Multiple Orders Being Loaded into a Mixed Container by Multiple Suppliers</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs3} alt="mcs1"/>
                    <br/>
                    <h5 className="containerserviceshead fw-bold">Combined Invoices  You can save money and effort by exporting several containers, buyers, or suppliers as a single invoice.</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs4} alt="mcs1"/>
                    <br/>
                    <h5 className="containerserviceshead fw-bold">Customs and Import Shipping Clearance of Customs and Delivery to Your Warehouses</h5>
                </div>
            </div>
            <br/>

            <div className="text-center">
                <h5 className="benefits-head">Benefits</h5>
            </div>
            <br/>
            <p className="air-services-body">We save our clients money by combining their small orders into a single container.  This enables you to ship your products for about the same cost as if you were bringing in a full container load. </p>
            <p className="air-services-body">We handle all of the costs associated with that, including shipping to the port, export customs clearance, and other paperwork fees. </p>
            <ul className="container-services-points">
                <li>Competitive pricing allows you to save money since you only pay for what you receive. </li>
                <li>Reliability of Schedule: Shipments in the fourth week of each month </li>
                <li>Sustainable Solutions: We ship right now.  Whatever is prepared. </li>
                <li>No Damages: Unlike LCL, our team handles loading with care.</li>
                <li>EXW Pricing: Purchasing on EXW terms will result in a significantly lower price than FOB, plus delivery to our warehouse. </li>
                <li>No Documentation Hassle: Our skilled staff takes care of the paperwork and customs clearance for imports and exports. </li>
                <li>Cost on Sharing Basis: All fixed costs are split according to the cubic metre (CBM) method.  Only what you use is paid for. </li>
                <li>Zero Hidden Cost: We provide you with a quote up front with no room for revisions, unlike LCL, where the shipping company is a swindler.</li>
            </ul>

            {/* faq's */}
            <div className="container my-5">
                <div className="accordion" id="faqAccordion">
                    {faqData.map((item) => (
                        <AccordionItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}


export default Airservicespage8;