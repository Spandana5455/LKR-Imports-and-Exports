import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Qualityinspection.css';
import qualityimg1 from './images/qualityimg1.png';
import qualityimg2 from './images/qualityimg2.png';
import qualityimg3 from './images/qualityimg3.png';
import qualityimg4 from './images/qualityimg4.png';

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

const Qualityinspection = () => {
    const faqData = [
        { id: "One", title: "How much quality inspection cost and what's included in a man day", content: (
            <>
            <p>Why, therefore, is the cost of one man-day of labor 299 USD, which is enough for a good number of random inspections?</p>
            <p>The following tasks are typically included in one man-day of work:
                <br/> Spending fifteen to thirty minutes reviewing the client's documentation and the checklist 
            </p>
            <p>The usual trip to the factory takes one to two hours.
                <br/>Ten minutes for introduction, first meeting, and warehouse visit
                <br/> It takes, on average, 30 to 45 minutes to count the quantity, perform appropriate sampling, and transport the selected samples to the 
                inspection location.  The worst-case scenario is half a day, while the best-case scenario is 10 minutes.  All of this was covered in my 
                article "Sampling Is an Important Part of a Random Inspection." 
            </p>
            <p>Examining the goods, the inside and outside packaging, and any unit packing, as well as performing laborious testing and visual inspections-roughly
                 four hours of concentrated, productive work  They do not want an inspector to work alone without "supervision" during the factory's lunch break, 
                 which includes 90 minutes of eating and waiting.
                 <br/> Making notes as you go, then presenting the results to the manufacturing personnel and supporting your reasoning-roughly fifteen minutes 
            </p>
            <p>Once more, returning from the plant takes an average of one to two hours.  
                <br/>It takes an average of one hour to prepare the draft report, which includes numerous images and clear remarks.
            </p>
            <p>Overall, this 12-hour work entails far more than most people realize (usually just visual check).</p>
            <p> If the factory is located distant from the nearest importer, there may be additional travel costs in addition to labor costs.  Let's look at three common examples: </p>
            <p>It is covered by the fee if the journey is less than 60 kilometers. </p>
            <p>There may be an additional 50 USD fee if the journey is 120 km.</p>
            <p>There may be an additional man-day fee (at half price) and an additional $100 USD if the journey is 400 miles.</p>
            </>
        )
        },
        { id: "Two", title: "How do i trust your inspection offer?", content: (
            <>
            <p>Our inspection officer will offer as many photos and videos as possible, so don't worry.  We will also make sure that you are informed of every 
                aspect so that you can submit a request right away if you still require confirmation.  We will request that the officer remain for additional explanations.
            </p>
            </>
        )
        },
        { id: "Three", title: "What if we still get wrong or damaged product", content: (
            <>
            <p>The likelihood of such an occurrence is 0.0001%.  We will, however, assist you in negotiating with the factory or pursuing damages in such an 
                improbable scenario.  The factory is responsible for replacing the goods if the damage results from a manufacturing defect; however, if the damage 
                is caused by transit or the shipping company handling the goods improperly, it is best to purchase 100% damage insurance prior to shipping in order 
                to protect against such improbable circumstances.
            </p>
            </>
        )
        },
        { id: "Four", 
            title: "What happens if supplier is not accepting the rejects?", 
            content: (
              <>
                <p>Indeed, this is a rather typical circumstance.  There is a disagreement with the supplier regarding this agreement when our officer examines 
                    the goods and discovers that they do not meet your specifications.  Renegotiation with the supplier is possible.  Or you could take this 
                    further by hiring a legal team.
                </p>
              </>
            ) 
          },
          
        { id: "Five", title: "What to do if you're operating on a small order?",content: (
            <>
            <p>What can you do if $399 is too much to spend (perhaps the total worth of your order is less than $1000)? Here are some substitutes:
                Request a lot of pictures and perhaps a live video from the supplier (simple with Wechat). 
            </p>
            <p>Request a few production-based samples from the provider. </p>
            </>
        )
        },
        { id: "Six", title: "How do we start ? step by step process", content: (
            <>
            <ol>
                <li> Contact details for the supplier </li>
                <li>A thorough product description and specification that includes images and possibly a brief video.</li>
                <li>An explanation of the packing and packaging requirements</li>
                <li>Any Quality Standard Indicators: You must specify what you can and cannot tolerate. </li>
                <li>Having a sample on hand can assist </li>
            </ol>
            </>
        )
        },
        { id: "Seven", title: "How do QC inspection usually work in practice?", content: (
            <>
            <p>Factory Audit: Our Factory Audit Sample Report will provide you with all the supplier's past history, company information, and images of the office, factory, warehouse, etc. </p>
            <p>Three-Level Inspection: During each trip, an officer would select and examine a random sample from the entire batch of raw materials, production, or 
                finished goods, respectively.  The inspector would notify you if your specifications are not fulfilled or if the quality is inconsistent.
            </p>
            <p>A few days prior to shipment, the pre-shipment inspection and final Randon inspection officer would count the quantity, make sure to select random samples 
                from the entire batch, and inspect those samples.  If your specifications are not fulfilled 
            </p>
            </>
        )
        },
    ];
    return (
        <>
        <div className="quality-inspection-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="quality-inspection-item">Quality control &product
                    <br/>inspection service</h1>
                </div>
            </div>
        </div>
        <br/>

        <div className="service-of-product-section">
            <div className="container">
                <br/>
                <h2 className="service-of-product-heading text-center">Service for Product Inspection and Quality Control </h2>
                <h5 className="service-of-product-sub-heading text-center"> Are you aware of the potential costs to a business of failing to control the quality of its products?</h5>
                <p className="service-of-product-text text-center">Poor quality or incorrect products have cost billions of dollars.  Assumptions made when providing your supplier with 
                    product details are the largest offender.  A clear price reduction may also result in a quality compromise.  
                    "If something is worth doing, it's worth doing well," goes a Chinese proverb. 
                </p>
                <p className="service-of-product-textquestions text-center"> Have you encountered phony factories offering enticingly low prices?  </p>
                <p className="service-of-product-textquestions text-center"> Do you have faith in the supplier's quality control staff? </p>
                <p className="service-of-product-textquestions text-center"> Have you already received subpar goods from a supplier? </p>
                <p className="service-of-product-textquestions text-center"> In China, do you require a qualified local representative? </p>
            </div>
            <br/>
        </div>
        <br/>
        <h5 className="service-of-product-sub-heading text-center">Use us when you're searching for a reliable partner to get sincere, high-quality results.</h5>
        <h2 className="service-of-product-heading text-center">Identifying and Resolving Production Problems at Their Root</h2>
        <p className="service-of-product-text text-center">Using our quality control services for importers, manufacturers, and retailers</p>


        <div className="container my-5">
            <div className="row my-4 steps-custom-border">
                <div className="col-md-6">
                    <img src={qualityimg1} className="img-fluid" alt="Audit" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-center">
                        <h4 className="steps-heading">Audits of Suppliers and Plants</h4>
                        <p className="steps-body"><strong className="steps-sub-heading">Step 1 </strong>
                        <br/>To match your budget, output, and quality requirements with your supplier's manufacturing capabilities, we can either find a new supplier or conduct an audit of your current provider.</p>
                    </div>
                </div>
            </div>
            
            <div className="row my-4 steps-custom-border">
                <div className="col-md-6 order-md-2">
                    <img src={qualityimg2} className="img-fluid steps-custom-image" alt="Pre-Production Inspection" />
                </div>
                <div className="col-md-6 d-flex align-items-center order-md-1">
                    <div className="text-center">
                        <h4 className="steps-heading">Inspection of Pre-Production in China</h4>
                        <p className="steps-body"><strong className="steps-sub-heading">Step 2</strong>
                        <br/> We conduct preproduction audits of your supplier's manufacturing facilities using on-site, qualified inspectors.</p>
                    </div>
                </div>
            </div>
            
            <div className="row my-4 steps-custom-border">
                <div className="col-md-6">
                    <img src={qualityimg3} className="img-fluid" alt="Production Inspection" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-center">
                        <h4 className="steps-heading">While conducting a production inspection</h4>
                        <p className="steps-body"><strong className="steps-sub-heading">Step 3</strong>
                        <br/> We can find any non-conformance or subpar production standards early on during production inspections.</p>
                    </div>
                </div>
            </div>
            
            <div className="row my-4 steps-custom-border">
                <div className="col-md-6 order-md-2">
                    <img src={qualityimg4} className="img-fluid steps-custom-image" alt="Pre-Shipment Inspection" />
                </div>
                <div className="col-md-6 d-flex align-items-center order-md-1">
                    <div className="text-center">
                        <h4 className="steps-heading">China pre-shipment inspection</h4>
                        <p className="steps-body"><strong className="steps-sub-heading">Step 4</strong>
                        <br/> After manufacture, check your products before they reach the shipment to prevent damage.</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="price-of-quality-inspection-section">
            <div className="container text-center">
            <h2 className="price-of-quality-inspection-heading pt-4">What is the price of a quality inspection in China?</h2>
                <p className="price-of-quality-inspection-body pt-2">Factory and Supplier Audits: USD 399</p>
                <p className="price-of-quality-inspection-body">Inspection at Level Three: 7% of Order Value</p>
                <p className="price-of-quality-inspection-body">Step 1: Inspection of China Prior to Production</p>
                <p className="price-of-quality-inspection-body">Step 2: During the Inspection of Production</p>
                <p className="price-of-quality-inspection-body">Step 3: Inspection of China Prior to Shipment</p>
                <p className="price-of-quality-inspection-body">Please contact our staff before placing an order, as the factories are being informed that the three-level inspection needs additional in-depth information and analysis. </p>
                <p className="price-of-quality-inspection-body">If last-step inspection (pre-shipment inspection) is all you're looking for We charge 3% of the order value. </p>
                <p className="price-of-quality-inspection-body">Loading, product inspection, quantity check, and other procedures are all part of the simple form of inspection. </p>
                <p className="price-of-quality-inspection-body-last">For additional information, get in touch with us.</p>
            </div>
            <br/>
            <br/>
        </div>

        <div className="services-of-chinese-manufacturing-section">
        <div className="container">
            <h2 className="text-center mb-4 pt-4">Services for Chinese Manufacturing Quality Assurance</h2>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="p-3">
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Examine and Confirm Manufacturers</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Be your eyes and ears on the ground, assisting factories on your behalf. Identify poor production, flaws, and more.</p>
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <div className="p-3">
                    <div className="vertical-line"></div>
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Identify shoddy packaging, flaws, and subpar production.</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Identify shoddy packaging, flaws, and subpar production. Give your clients the quality assurance they need.</p>
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <div className="p-3">
                    <div className="vertical-line"></div>
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Effective. economical. reliable.</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Use Quality Control in China to manage your manufactured items and save time and money.</p>
                    </div>
                </div>
                <div style={{ height: "2px", backgroundColor: "black", width: "100%" }}></div>
                <div className="col-md-4">
                    <div className="p-3">
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Instantaneous Communication</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Communicate with the factory directly when a non-conformance is found.</p>
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <div className="p-3">
                    <div className="vertical-line-two"></div>
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Unbiased and timely report</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Provide you with thorough, unbiased reporting so you can make wise decisions.</p>
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <div className="p-3">
                    <div className="vertical-line-two"></div>
                        <h5 className="fw-bold services-of-chinese-manufacturing-heading text-center">Cutting down on waste and reworking of non-compliant goods that arrive onshore</h5>
                        <p className="services-of-chinese-manufacturing-body text-center">Avoid quality concerns brought on by shipping and box loading issues.</p>
                    </div>
                </div>
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
    );
};

export default Qualityinspection;