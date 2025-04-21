import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productsourcing.css';
import moq1 from './images/moq1.png';
import moq2 from './images/moq2.png';


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


const Productsourcing = () => {

    const faqData = [
        { id: "One", title: "I don't know  you , how can i trust you", content: (
            <>
            <p>
            We have been putting a lot of effort into earning our clients' trust since 2025.  Our repeat business demonstrates our reliability.  There are many of competitors, of course, but we think that building trust requires more than simply words. 
            </p>
            <p> To assess and establish confidence, we invite you to come see us in person.</p>
            </>
        )
        },
        { id: "Two", title: "Is product sourcing really free?", content: (
            <>
            <p>Indeed, sourcing  Yes, it is free; we don't impose a separate sourcing fee. However, in order to deploy stable time for quality sourcing, we would need a commitment of $300 or Rs. 20,000.  </p>
            <p> On your first order, the security deposit is converted to payment.</p>
            </>
        )
        },
        { id: "Three", title: "Where do you find the suppliers", content: (
            <>
            <p>We find suppliers from a number of places, including Taobao, Global Sources, Alibaba, and others.  Our objective is to make the buying process as easy, 
                quick, and safe as possible.  In order to make sure the ideal supplier fits your needs and expectations, we place a high priority on supplier 
                evaluation and verification.  For you, we want to be the "hassle-killer."
            </p>
            </>
        )
        },
        { id: "Four", 
            title: "What's the payment method?", 
            content: (
              <>
                <p>Common ways to pay </p>
                <p> Letter of Credit (L/C) and Telegraphic Transfer (T/T) </p>
                <p> Alibaba Trade Assurance 
                    <br/>
                    PayPal
                    <br/>
                    Please be cautious of payment frauds and schemes involving supplier email intrusions.  Do your research before transferring funds to a new bank account. 
                </p>
              </>
            ) 
          },
          
        { id: "Five", title: "Would you have preferred relationship with supplier ",content: (
            <>
            <p>No, we don't create a favored list or prioritize.
                <br/>
                We never accept supplier commissions. We promise complete transparency in our sourcing and buying.
            </p>
            </>
        )
        },
        { id: "Six", title: "Are you limited to any particular industry", content: (
            <>
            <p>No, absolutely not.</p>
            <p>Because we have a great deal of experience sourcing from China, we can manage a wide variety of sectors. We supply anything from 
                screws to industrial production lines. LKR IMPORTS & EXPORTS is able to source from almost any industry.
            </p>
            </>
        )
        },
        { id: "Seven", title: "I have some existing supplier , can you handle the sourcing", content: (
            <>
            <p>By attending to specific requirements, we may help with export assistance, imports and customs clearance, vendor relationship 
                management, order tracking, shipping, negotiation, and more.
            </p>
            </>
        )
        },
        { id: "Eight", title: "How do i start working with you?", content: (
            <>
            <p>Our sourcing agent will contact you within 48 hours if you send your request to lkrtech@gmail.com with as much data as possible. After the 
                request is approved, you can deposit $300 (or INR 20,000) into our company's account, and we will, on a case-by-case basis, find the 
                best supplier to meet your needs. 
            </p>
            <p>If you still have questions, don't be afraid to get in touch with us.</p>
            </>
        )
        },
        { id: "Nine", title: "Do you have commission from the supplier", content: (
            <>
            <p>No, we never accept supplier commissions.  Our transactions are completely open and impartial to safeguard your interests.</p>
            </>
        )
        },
        { id: "Ten", title: "When should i make my supplier sign  an Non-disclosure agreement(NDA)", content: (
            <>
            <p>NDA shares specifications with manufacturers for pricing information and assists in locating qualified suppliers.  It does not, however, 
                take the place of appropriate IP protection.  Chinese producers are frequently misunderstood by importers as dangers, yet domestic rivalry 
                is real.  The finest protection is IP.
            </p>
            </>
        )
        },
        { id: "Eleven", title: "Do you share my pricing to our potential competitor ?", content: (
            <>
            <p>We take the initiative to protect intellectual property and enter into confidentiality agreements with our clients.</p>
            </>
        )
        },{ id: "Twelve", title: "Do you have more order quantity for sourcing ? USD 8000?", content: (
            <>
            <p>Yes, we do have a minimum order quantity.</p>
            </>
        )
        },
    ];
    return (
        <>
        <div className="product-sourcing-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="product-sourcing-item">Sourcing Products
                    <p className="product-sourcing-text">When it comes to product sourcing, there is no secret formula. Allow the experts to assist you in obtaining the greatest 
                        price for your product. You can obtain the highest quality goods and commodities thanks to our procurement knowledge and experience.
                    </p>
                    </h1>
                </div>
            </div>
        </div>

        <div className="row align-items-center mt-4">
            <div className="col-md-6">
                <div className="text-start product-rectangle-bg">
                    <h2 className="product-sourcing-heading">Which goods should I import from China? </h2>
                    <p className="product-sourcing-text-body">Which goods should I import from China?
                        <br/>
                        Yes, choosing the appropriate supplier is essential to becoming a successful importer. Finding a supplier who matches your company model is just 
                        as important as finding the greatest price. Talk to us about your company plan, and together we will choose a suitable supplier who can meet our 
                        objectives while also offering a competitive price. 
                    </p>
                    <p className="product-sourcing-text-body">"You can save billions of dollars by having a detailed requirement; assuming you have one will only shock you." Maulik Shah </p>
                    <p className="product-sourcing-text-body">Did you presume your needs without consulting your supplier? If so, be ready to be surprised by what they produced. Make a detailed list of everything
                         you want. We'll see to it that you receive what you request.
                    </p>
                    <br/>
                </div>
            </div>

            <div className="col-md-6">                                                       
                <div className="text-start product-sourcing-theory">
                    <h5 className="product-sourcing-head">Is a sourcing agent necessary when I can source online? </h5>
                    <p className="product-sourcing-body">Using the B2B portal to source products online alone might not be sufficient. For our clients to obtain the ideal source, we require them to 
                        accompany our team to pertinent trade shows. Initially, sourcing online might be beneficial, but as your company expands, you may want to find a 
                        better supplier.
                    </p>
                    <p className="product-sourcing-body">LKR Imports & exports assists its clients in finding the most suitable supplier for their purchase requirements. We provide value by suggesting a 
                        supplier who offers flexibility in addition to the best pricing, allowing you to concentrate on your core skills.
                    </p>
                    <p className="product-sourcing-body">Innovators occasionally make mistakes. It is best to acknowledge them as soon as possible and go on to enhancing your other innovations.</p>
                    <p className="product-sourcing-body">"Neglect causes more business losses annually than any other cause."</p>
                </div>
            </div>

            <h2 className="getting-started-heading text-center my-4">Getting Started</h2>
                <div className="row g-1">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h5 className="productsourcing-head">How it operates</h5>
                            <p className="productsourcing-body">Select the product you want to purchase, create a list of criteria, and send it to our knowledgeable sourcing agent. They will help you make
                                 the complicated purchasing procedure easier. To make your decision easier, our knowledgeable agent will find the finest supplier that meets 
                                 your product requirements and send you the best-filtered quotation.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4">
                            <h5 className="productsourcing-head">Adjust the Horizon </h5>
                            <p className="productsourcing-body">Make an effort to write down every aspect of the product before creating the specifications. It could be as specific as the precise color 
                                code you want your product to be created in or the quantity of screws you need. After you send them to us, we'll begin the sourcing process. 
                                To begin investing time in finding the finest supplier, we would need a $300 USD security deposit. You will receive a full refund for your 
                                initial 
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4">
                            <h5 className="productsourcing-head">Bundling or a number of products</h5>
                            <p className="productsourcing-body">Do you intend to purchase several items or have a product that will be built and packaged from several vendors? In this case, we would need you 
                                to provide us a list of the product or products you intend to buy. We will schedule your appointments with the possible suppliers, and you will 
                                need to travel to China. Throughout your journey, our knowledgeable agent will assist you with all you need for your purchase, from hotel 
                                reservations to airport pickup.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4">
                            <h5 className="productsourcing-head">Machinery & Plant</h5>
                            <p className="productsourcing-body">obtaining raw materials, production lines, turnkey projects, and factory setup. We are able to source anything you require. Tell us what you want
                                 to manufacture, and we'll sift through the options to find the best hidden gem supplier for your upcoming project.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="moq-section">
                    <div className="row m-3">
                        <div className="col-md-6 p-4">
                            <img src={moq1}  className="moq-img" alt="moq1"/>
                        </div>

                        <div className="col-md-6 p-4">
                            <h5 className="moq-heading text-center">MOQ?</h5>
                            <p className="moq-body text-start">As long as the suppliers are prepared to provide the specified quantity, we do not require a Minimum Order Quantity (MOQ). However, 
                                based on our expert analysis, customers who spend less than 8,000 USD typically don't place repeat orders.
                            </p>
                        </div>

                        <div className="col-md-6 p-4">
                            <img src={moq2}  className="moq-img" alt="moq2"/>
                        </div>

                        <div className="col-md-6 p-4">
                            <h5 className="moq-heading text-center">Do you promise the best deal?</h5>
                            <p className="moq-body text-start">Naturally, if the prices are not low, why would anyone source from China? Is finding the best deal the secret to successful product sourcing? 
                                The right price, in my opinion, is more significant than a lower one. We promise to give our customers the best price for their needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="visit-factory-section">
                    <div  className="container">
                        <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                            <h2 className="visit-factory-heading text-center">Visits to factories and trade exhibits
                            <p className="visit-factory-body text-center">We demand that our clients stay current. Our top clients have increased multifold merely by keeping themselves up to date. Meeting suppliers 
                                is one of the finest ways to stay up to date with market trends. How do we go about it? We ensure that our clients visit factories to 
                                discover new ideas and attend pertinent trade shows in China. Your upcoming business trip to China will be aided by our agent.
                            </p>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="visit-factory-section-two">
                    <div  className="container">
                        <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                            <h2 className="visit-factory-heading text-center">Get your first estimate for free right now.
                                <br/>
                                <br/>
                            <p className="visitfactory-body text-start">We will respond to you within 48 to 72 hours if you already have a supplier and you would like us to provide the cost of import up to your door.</p>
                            <p className="visitfactory-body text-start">For us to provide you with a precise quote Please provide us with the following details:</p>
                            <ol className="visitfactory-points text-start">
                                <li>Order value</li>
                                <li>CBM or box dimensions</li>
                                <li>The total order weight</li>
                                <li>The HSN code</li>
                                <li>Description of the product</li>
                                <li>Air/Sea Mode</li>
                            </ol>
                            <p className="visitfactory-body text-start">If you have a proforma invoice and packing list, you can also share them.</p>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="faq-section">
                    <div className="accordion" id="faqAccordion">
                    {faqData.map((item) => (
                        <AccordionItem key={item.id} {...item} />
                    ))}</div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Productsourcing;