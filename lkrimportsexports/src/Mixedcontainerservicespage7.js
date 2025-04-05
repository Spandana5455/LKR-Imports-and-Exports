import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Mixedcontainerservicespage7.css';
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

const Mixedcontainerservicespage7 = () => {

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

    return(
        <>
        <div className="mixed-container-services-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="mixed-conatiner-services-text">Service of Mixed Containers</h1>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <div className="text-center">
                <h2 className="container-services-heading">Services for Mixed Containers</h2>
            </div>
            <strong className="conatinerserviceshead"><p>The following questions will be addressed. </p></strong>
            <ul className="container-services-points">
                <li>How can I import small orders and several products from China? </li>
                <li>Do you place minor orders with numerous vendors?  Exorbitant LCL shipping costs could be costing you thousands of dollars. </li>
                <li>Is it feasible to have a single bill of lading for several shippers? </li>
                <li>How Can Several Items Be Shipped in the Same Container?</li>
            </ul>
            <strong className="conatinerserviceshead"><p>Combining several orders can result in significant cost savings.</p></strong>
            <p className="container-services-body">There are two categories of shipments in the context of marine freight: </p>
            <ul className="container-services-points">
                <strong className="conatinerserviceshead"><li>Full Container Load, or FCL </li></strong>
                <p className="container-services-body">One importer, one container of products.  This is the least expensive choice. </p>
                <li><strong className="conatinerserviceshead">Less than Container Load, or LCL,</strong>refers to "mixed" containers that transport products for multiple importers.</li>
                <p className="container-services-body">Compared to FCL, LCL might cost two to three times as much each shipping unit.  The administrative cost, which accounts for a significant portion of the overall shipping cost, is just as costly for an LCL shipment as it is for an FCL container.</p>
                <p className="container-services-body">Therefore, combining multiple separate LCL shipments into a single FCL shipment can result in significant cost savings. </p>
                <p className="container-services-body">Mixed Container Service: A hybrid model has been developed.</p>
                <li><strong className="conatinerserviceshead">Mixed Container Service: </strong>As part of our hybrid approach, we will combine your products with those of other customers to create an FCL and send them to India. In many situations, this is still less expensive than LCL-nearly half as much.</li>
            </ul>

            <h2 className="container-services-heading">Following are the Important Steps how that works.</h2>
            <h2 className="container-services-heading">1. Purchase from all vendors on FOB or FCA terms. </h2>
            <h5 className="container-services-head">If you do not have export clearance papers, your cargo cannot leave the nation.  These documents are available to us in two ways:</h5>
            <h5 className="container-services-head">Option A: Place an FCA or FOB Order </h5>
            <p className="container-services-body">FCA is for Free Carrier (export documentation, no shipping), and FOB stands for Free on Board (export documents and shipping to the port). </p>
            <p className="container-services-body">Export clearance documentation will be provided by each supplier.</p>
            <h5 className="container-services-head">Option B: Place an EXW order </h5>
            <p className="container-services-body">The export clearance documentation will not be supplied by the vendors.  Instead, Our Export company is in charge of this. </p>
            <p className="container-services-body">Since the supplier is often responsible for issuing the export papers, the second option may be more difficult.  With lithium batteries and other dangerous products, this isn't always simple.</p>
            <h2 className="container-services-heading">2. Arrange for delivery to our storage facility. </h2>
            <h5 className="container-services-head">Every shipment needs to be sent to the same loading port.  There are three methods for doing this:</h5>
            <h5>Option A: Place the order using FOB terms. </h5>
            <p className="container-services-body">This implies that every supplier schedules transportation to the loading port, such as Shenzhen.  The distance that the items must be transported determines the FOB charges.
                <br/>
            The supplier bases their quotation on the nearest port when you request a "regular" FOB quote.Therefore, we must direct the supplier to:
                <br/>
            a. Offer a FOB quote that covers transportation to a particular city b. Verify that port is designated as the loading port. </p>
            <h5 className="container-services-head">Option B: Place the order in line with FCA regulations </h5>
            <p className="container-services-body">Although the supplier issues export clearance documents as part of FCA, the cargo is not moved from the manufacturer to the loading port.
                <br/>
                Additionally, it enables you to ensure that the products are adequately insured for transit from the manufacturer to the loading port.
            </p>
            <h5 className="container-services-head">Option C: Place the order in accordance with EXW terms </h5>
            <p className="container-services-body">Since EXW does not charge for shipping, they will provide you the best deal.  Each supplier will be given instructions to schedule transportation to our designated warehouses, where we will meticulously pack every item into a container and ship it out.</p>
            <p className="container-services-body">Therefore, we must direct the supplier to: 
                <br/>
                a. Give an EXW price that covers transport to a particular city 
                <br/>
                b. We won't ask suppliers for any export documentation. 
                <br/>
                Small factories or goods without disadvantages that the Chinese government benefits from should ideally be exported by EXW; if there are no disadvantages to exporting, manufacturers may choose a simpler route.
            </p>
            <h2 className="container-services-heading">3. Ensure that suppliers' manufacturing is in sync.</h2>
            <h5 className="container-services-head">Orders are often delayed by manufacturers.  For weeks at a time. </h5>
            <p className="container-services-body">All shipments will be delayed if one supplier experiences a production delay. 
                <br/>
                Although the exact completion date of the manufacturing cannot be predicted, we must coordinate your orders to prevent long-term delays. 
                <br/>
                Because of this, products with longer lead times have to start manufacturing a few weeks earlier than those with shorter lead times. 
                <br/>
                Additionally, you should allow for possible delays by at least two weeks.
            </p>
            <h2 className="container-services-heading">4. Consolidate the goods into a single DAP or DDU shipment.</h2>
            <h5 className="container-services-head">We can load the items into a single FCL container once every shipment has reached the port of loading.</h5>
            <p className="container-services-body">Additionally, we will provide the packing list, commercial invoice, and bill of lading.</p>
            <p className="container-services-body"> The export clearance documents that each supplier or the forwarder issues serve as the basis for this. </p>
            <p className="container-services-body">If there are numerous suppliers involved, this could take a few more days.</p>
            <h2 className="container-services-heading">Do you require assistance with customs and shipping?</h2>
            <p className="container-services-body">We are aware of how challenging it can be to comprehend the shipping and customs procedures, particularly if you have never imported anything from Asia.  We developed the Starter Package to assist start-ups in understanding the procedure, avoiding fraud, and avoiding overcharging shipping agents: 
                <br/>
                Every four to eight weeks, our Mixed Container Service departs from China.  All we require is your supplier's proforma invoice and purchase contract, as well as the packing list that includes the space volume (CBM) and weight (KGS) information.  We'll make room in our next available container for you.
                <br/>
                In order to save you money on your order, we bundle orders from other customers with a minimum order of USD 8,000.   Included are the following services: 
            </p>
            <ul className="container-services-points">
                <li>Repackaging</li>
                <li>Container Loading </li>
                <li>Securing Loads </li>
                <li>Handling, storing, and co-packing containers</li>
                <li>Container Release</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/* images */}
            <div className="row text-center">
                <div className="col-md-3">
                    <img src={mcs1} alt="mcs1"/>
                    <br/>
                    <h5 className="container-services-head">Place Several Orders Combining Different Orders</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs2} alt="mcs1"/>
                    <br/>
                    <h5 className="container-services-head">Container for Mixed Materials Multiple Orders Being Loaded into a Mixed Container by Multiple Suppliers</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs3} alt="mcs1"/>
                    <br/>
                    <h5 className="container-services-head">Combined Invoices  You can save money and effort by exporting several containers, buyers, or suppliers as a single invoice.</h5>
                </div>

                <div className="col-md-3">
                    <img src={mcs4} alt="mcs1"/>
                    <br/>
                    <h5 className="container-services-head">Customs and Import Shipping Clearance of Customs and Delivery to Your Warehouses</h5>
                </div>
            </div>
            <br/>

            <div className="text-center">
                <h5 className="benefits-head">Benefits</h5>
            </div>
            <br/>
            <p className="container-services-body">We save our clients money by combining their small orders into a single container.  This enables you to ship your products for about the same cost as if you were bringing in a full container load. </p>
            <p className="container-services-body">We handle all of the costs associated with that, including shipping to the port, export customs clearance, and other paperwork fees. </p>
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

            {/* FAQ Section */}
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

export default Mixedcontainerservicespage7;