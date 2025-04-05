import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Confirmingsample.css';
import productsample1 from './images/productsample1.png';
import productsample2 from './images/productsample2.png';
import productsample3 from './images/productsample3.png';
import productsample4 from './images/productsample4.png';
import productsample5 from './images/productsample5.png';
import productsample6 from './images/productsample6.png';
import productsample7 from './images/productsample7.png';
import productsample8 from './images/productsample8.png';


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


const Confirmingsample = () => {

    const faqData = [
        { id: "One", title: "How much does it cost to produce as sample?", content: (
            <>
            <p>The product's size and kind determine the cost, as does whether new molds or tools are needed to make it to your specifications.</p>
            <p> When obtaining factory samples, you typically simply have to pay for shipping.However, depending on the cost of tooling (if any), 
                the price range for purchasing customized product samples can range from $5 to $10,000.
            </p>
            <p>For instance: 
                <br/>Products Made of Plastic: $5 to $100 
                <br/>Clothes: $10 to $50 
                <br/>Electrics for ODM: $10 to $500 
                <br/>Electronics from OEM: $500 to $5000</p>
            </>
        )
        },
        { id: "Two", title: "How much service charge you would charge me for handling sample?", content: (
            <>
            <p>There are no fees associated with handling samples.  All you have to do is provide us a $300 security deposit or Rs. 20,000 
                for future bulk orders, and we'll take care of the sample at no cost to you.  All you have to pay is the courier delivery price.
            </p>
            <p>  You can use our third-party Quality Inspection services if you need Production Samples for Testing or QC.  where a random sample will be 
                collected by our officer and sent to your office for additional testing.  All you have to pay is the courier delivery price.
            </p>
            </>
        )
        },
        { id: "Three", title: "Can i order product samples on Alibaba.com?", content: (
            <>
            <p>Yes, however you must locate vendors who are willing to create product samples.</p>
            <p>Additionally, we advise you to use Alibaba Trade Assurance to pay for product samples.  Suppliers are increasingly using the Alibaba payment 
                gateway to generate digital invoices.  Alibaba.com ensures that the money is transferred to the correct business and not to another vendor.
            </p>
            </>
        )
        },
        { id: "Four", 
            title: "Are sample free?", 
            content: (
              <>
                <p>Even while some vendors might give away free product samples, they always demand payment for the DHL or FedEx delivery charge, which often runs between $30 and $40.</p>
              </>
            ) 
          },
          
        { id: "Five", title: "How long does it take to make product sample?",content: (
            <>
            <p>The complexity of the specifications and the capability of the vendors determine this.  While more sophisticated products can take over a 
                year to produce, simple material samples can be supplied via FedEx and DHL in a day or two.
                <br/>The average amount of time that most suppliers have taken:
                <br/>Samples of in-stock materials: 3-7 days
                <br/>Samples of materials (manufactured to order): 14-30 days 
                <br/>Samples of clothing: 14-45 days
                <br/>Samples that are injection-molded: 45-70 days 
            </p>
            </>
        )
        },
        { id: "Six", title: "How do i communicate my product specification prior to buying a product sample?", content: (
            <>
            <p>When issuing a purchase order, the majority of specifications are written down.  This is regarded as the primary document that it often includes. </p>
            <p>DIMENSIONS AND COLORS </p>
            <p> Product applications, safety regulations, plug and voltage packing standards, and materials certifications or compliance </p>
            <p>PATENT OR IP PROTECTION </p>
            <p>When producing samples, the supplier will use this document.</p>
            <p>The product specification must be very clear and easy to comprehend because it will be shared between engineers and subcontractors, or material suppliers. </p>
            <p> Nothing should be left up for interpretation because this can easily lead to miscommunications.</p>
            </>
        )
        },
        { id: "Seven", title: "Can i send product samples to my factory and ask them to make the product that way?", content: (
            <>
            <p>Yes, and sending a real reference sample can sometimes make it easier to "communicate" your design and material needs. </p>
            <p>Nevertheless, the supplier is still required to supply counter-samples that are manufactured at their facility using supplies from their subcontractors.  
                Remember that testing the supplier's ability to produce the goods the way you want it is a major reason you need product samples.
            </p>
            </>
        )
        },
    ];
    const samples = [
        {
          image: productsample1,
          title: "Samples from factories",
          description:
            "A ready-made product sample that is not produced in accordance with the buyer's design or special requirements is called a factory sample.",
        },
        {
          image: productsample2,
          title: "Custom Made Product Samples",
          description:
            "To confirm the manufacturer's ability to produce the product, a pre-production sample tailored to the buyer's specifications is utilized.",
        },
        {
          image: productsample3,
          title: "Samples of production",
          description:(
            <p>"A production Sample (Or Batch Sample) is randomly taken from a mass-produced quantity.  These Samples are used for various purposes like
                <br/>Laboratory examination
            <br/> Testing for functionality
            <br/> Control of Quality"</p>
        )
        },
        {
            image: productsample4,
            title: "Product sample in virtual form",
            description:
              "Photoshop-created 2D renderings or more complex 3D product models that may be tested in a virtual setting are examples of virtual product samples.",
          },
          {
            image: productsample5,
            title: "3D Printed sample",
            description:
              "Samples that were 3D printed  An excellent method for testing the functionality and design.  You may produce demonstration samples using 3D printing in a few short hours.",
          },
          {
            image: productsample6,
            title: "Counterexamples",
            description:
              "A citation  To illustrate certain features of a product, a sample is delivered to the supplier.  In essence, you are asking the provider to duplicate your sample for you.",
          },
      ];
    return(
        <>
        <div className="confirming-sample-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="confirming-sample-item">Product Design 
                        <br/>and 
                        <br/><span className="sample-color">Sample</span>
                        <br/> 
                    <p className="confirming-sample-text"><strong>Chinese Product Samples: A Comprehensive Guide </strong>
                    <br/>Requesting product samples is crucial when importing goods in large 
                        quantities from China and other Asian countries. Naturally, seeing and handling the products before production begins is always 
                        preferable. Alternatively, you might want to verify that the provider is legitimate.
                    <p className="confirming-sample-text">As an importer, it is our responsibility 
                        to inform you of the entire product sample process, including prices, types, and lead times.</p>
                    </p>
                    </h1>
                </div>
            </div>
        </div>
        <br/>
        <h2 className="six-type-productsample">6 type of product sample</h2>


        <div className="container mt-4">
            <div className="row">
                {samples.map((sample, index) => (
                    <div className="col-md-12 mb-4" key={index}>
                        <div className="card border-custom">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={sample.image} alt={sample.title} className="img-fluid w-100 h-100"/>
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="card-body text-center">
                                        <h5 className="card-title productsample-title">{sample.title}</h5>
                                        <p className="card-text productsample-text">{sample.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={productsample7} alt="productsample7"/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="product-sample-head">What is the purpose of ordering product samples?</h2>
                    <p className="product-sample-text">Ordering product samples is essential when importing goods in bulk from Asia in order to assess the supplier's capabilities, 
                        test molds or tooling, and confirm the design and quality of the final product.  A seamless transition to mass production is 
                        ensured by these samples, which aid in confirming the product's overall quality and functionality prior to mass manufacturing.
                    </p>
                </div>
            </div>

            <div className="row">    
                <div className="col-md-6 py-4">
                    <h2 className="product-sample-head">Limits of prototyping and product sample</h2>
                    <p className="product-sample-text">When it comes to pre-production samples, manufacturers are limited in what they can accomplish. A little material sample cannot 
                        be used to create a specific Pantone color; it requires a specific order volume.
                    </p>
                    <p className="product-sample-text">This also holds true for raw resources; factories 
                        could only be able to make your goods using stock supplies.  Materials for a single product sample cannot be made to order.
                        <br/>For instance 
                        <br/>The wrong colors 
                        <br/>Inaccurate Resources 
                        <br/>Inaccurate Packaging 
                        <br/>Prototype built by hand rather than by machine 
                        <br/>Materials, components, and design are also subject to additional technical and financial constraints. 
                        <br/>Before placing an order for product 
                        samples, it's critical to understand these restrictions.
                    </p>
                </div>
                <div className="col-md-6 py-4">
                    <img src={productsample8}  className="product-sample-image" alt="productsample8" />
                </div>
            </div>
        </div>

        <div className="container my-5">
            <div className="accordion" id="faqAccordion">
                {faqData.map((item) => (
                    <AccordionItem key={item.id} {...item} />
                ))}
            </div>
        </div>

        </>
    )
}

export default Confirmingsample;