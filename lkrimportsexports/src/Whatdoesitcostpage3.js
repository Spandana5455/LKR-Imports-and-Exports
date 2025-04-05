import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Whatdoesitcostpage3.css";
import table from './images/table.png';
import productprice from './images/productprice.png';
import cbm from './images/cbm.png';
import weight from './images/weight.png';
import shipping from './images/shipping.png';
import product from './images/product.png';
import customs from './images/customs.png';
import risk from './images/risk.png';
import overhead from './images/overhead.png';
import { Link } from "react-router-dom";


const Whatdoesitcostpage3 = () => {
  const faqs = [
    {
      question: "What shipping techniques are frequently employed for bringing goods into India from China?",
      answer: "Air and marine freight are the most popular shipping options. Sea freight is typically less expensive but takes longer, whereas air freight is quicker but costs more."
    },
    {
      question: "How can I calculate the cost of transporting items from China to India?",
      answer: "A number of variables, including cargo weight, volume, mode of transportation, distance, and extra services needed, affect shipping costs. A more precise estimate can be obtained by requesting quotes from goods forwarders or shipping businesses."
    },
    {
      question: "Is it possible to haggle over shipping costs while importing to India from China?",
      answer: "Yes, you can bargain with goods forwarders or shipping providers. It is wise to talk about possible savings or discounts and compare estimates from other suppliers."
    },
    {
      question: "What are Incoterms, and what effect do they have on import prices? ",
      answer: "Incoterms are globally accepted terms that specify the obligations and expenses that the buyer and seller will incur during shipping.  The selected Incoterm influences the total cost of imports by determining who is responsible for insurance and transportation expenses.",
    },
    {
      question: "When importing from China to India, are there any unstated fees or levies to be mindful of?",
      answer: "Storage expenses, demurrage fees, port handling fees, customs examination fees, and administrative fees are examples of hidden expenditures.  Clarifying these possible expenses is crucial before completing the import procedure.All hidden charges are included in our pricing.",
    },
    {
      question: "Are there any exemptions or reduced rates for customs duties and taxes when importing from China to India?",
      answer: "Certain products may qualify for exemptions or reduced rates under free trade agreements, preferential trade agreements, or special schemes such as duty drawbacks. Researching and complying with specific requirements can help reduce costs.",
    },
    {
      question: "What effect does the exchange rate have on the price of importing goods into India from China?",
      answer: "The cost of imports may be impacted by changes in the exchange rate between the Chinese yuan and the Indian rupee.  To control currency risks, it is wise to keep an eye on exchange rates and think about hedging techniques ",
    },
    {
      question: "Can I opt for insurance coverage for my imported goods?",
      answer: "Yes, it's recommended to have insurance coverage for your imported goods to protect against loss or damage during transit. Insurance costs can vary based on the value and nature of the goods.",
    }
  ];
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <div className="what-does-it-cost-section">
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: "100vh" }}>
            <h1 className="what-does-it-cost-text">Product Costing</h1>
          </div>
        </div>
      </div>
      <br />

      <div className="container my-4">
        <div className="text-center">
          <h2 className="what-does-heading">How Much Does It Cost to Ship Goods to India from China?</h2>
        </div>
        <br/>
        <div className="text-start">
          <p className="what-does-text"> 
            Prior to placing your order, you must have a solid idea of the landing cost. The cost of the products plus
            the forwarder's transportation expenses, import taxes (if applicable), our services (inspections, agents,
            etc.), and local transportation expenses equals the landing cost. There aren't any unstated expenses that
            aren't covered well in advance. Assumptions are not accepted nor expected in costing. I mean, there will be
            no charges other than what has been discussed. Our objective is transparency.
          </p>
          <strong className="what-does-head fw-bold">COSTING EXPLAINED</strong>
          <ul className="what-does-points">
            <li>Purchase price in USD x Exchange Rate ;[a]</li>
            <li>Freight Charges (USD80 to 120 Per Cubic Meter by Sea/By air $3 to $12) ; [b]</li>
            <li>Customs Duty on cost of goods [a+b] x % Tariff Rate =[c]</li>
            <li>Commission : 5% on [a + b + c] = [d]</li>
            <li>Applying Local Taxes CST/VAT (% as per tariff x d) = [e]</li>
            <li>Local Transport from port till your warehouse; [f]</li>
            <li>Total Amount payable in INR; [e + f]</li>
          </ul>
          <strong className="what-does-head fw-bold">
            <p>The below example will illustrate the costing of Product A which you can relate to your product.</p>
          </strong>
          <p className="what-does-text">
            Product A is Costing USD 20 ordered quantity is 100pcs; Total CBM (Cubic Meter) of the material is 2 M2.
            <br />
            Customs Duty lets say is 15% the landing cost will be as follows:
          </p>
          <p className="what-does-text">
            Purchase price: 20 X INR 65 (Exchange rate taken as 1USD= INR 65) = INR 1300
            <br />
            Freight Charges for each product: 2 M2 / 100Pcs = 0.02 (CBM/Pc) X $100 = INR 130
            <br />
            Customs Duty : (1300+130) X 15% = INR 215
            <br />
            Commission : [1300+130+215] x 5% = INR 82
            <br />
            Landing cost: INR 1727
            <br />
            Local Taxes and transport as applicable will be taken at actual.
          </p>
        </div>

        {/* Dry Cargo Containers Table */}
        <div className="text-center my-5">
          <h2 className="what-does-heading">DRY CARGO CONTAINERS</h2>
          <br/>
            <img src={table} className="cargo-img" alt="table" />
        </div>
        <br/>


        {/* FAQ section */}
        <div className="accordion" id="faqAccordion">
        
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed no-border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is Landed Cost ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            <p>By calculating the overall cost of a product from the factory floor to the customer's door, landed cost is a crucial tool for determining your company's bottom line. </p>
            <p>The price of the items, shipping expenses, insurance premiums, customs taxes, and any other expenditures spent throughout the journey are all included. </p>
            <p>Understanding how to compute landed costs is not only crucial, but it is also essential for managing a profitable company.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed no-border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why is Landed Cost Necessary ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>Getting any product to your clients comes with both clear and hidden costs.  As a result, the actual cost of the goods you sell could occasionally appear unclear. </p>
              <p>However, understanding your landed cost may provide clarity, enabling you to evaluate the performance of your company, optimise your pricing, and make sure you are aware of the precise amount you are spending on inventory.</p>
              <p>Additionally, it gives you the chance to examine your supply chain and identify areas where cost reductions can be worthwhile. </p>
              <p>You can use this information to determine whether your business strategy is sustainable or whether you will be able to turn a profit on your products. </p>
              <p>However, if you do not yet know all of your expenses or do not have the ability to predict how much the additional fees that frequently arise in shipping would be, calculating landed cost might be challenging. </p>
              <p>In order to predict and estimate a value that is as close to your actual expenditures as feasible, it is essential to have the appropriate tools.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed no-border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Calculating landed Cost ?  
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>Determining your landed cost can be challenging.  </p>
              <p>If you overestimate, your pricing may cause you to lose out on sales. </p>
              <p>If your estimate is too low, your profits may suffer. </p>
              <p>For this reason, having the appropriate tools is essential. </p>
              <p>Keep in mind that your original estimate is just that—an estimate.  A rough estimate.  Although our calculators are a terrific method to obtain a good understanding of your prices, once you get your final numbers, you should always do another landed cost calculation. </p>
              <p>The fundamental equation you will be computing is as follows: 
                <br />Landed Cost = Shipping + Customs + Risk + Overhead</p>
            </div>
          </div>
        </div>

        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed no-border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How to Reduce Your Expenses and Increase Profits ?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>While marking up prices is one way to reduce your total landed costs, a landed cost analysis can help you uncover additional opportunities that could potentially make an even bigger impact-without putting the burden on your customers. </p>
              <p>One of the most effective ways to use a landed cost analysis to reduce expenses is to audit your supply chain partners.  Remember, the lowest price doesn't always translate into the biggest profit. </p>
              <p>Unexpected fees could raise your total landed cost.  To find the ideal fit for your expanding company, compare prices from various manufacturers, suppliers, 3PLs, shippers, etc. and look up the TRUE net landed cost.  Additionally, you could attempt to bargain with your current partners for better prices and packages.</p>
            </div>
          </div>
        </div>
        <br/>

        
        {/*explained cost section */}
        <div className="row align-items-center mt-4">
        <div className="col-md-6">
            <div className="text-start rectangle-bg">
                <p className="what-does-rectangle-text">EXPLAINED COSTS 
                    <br/>
                    USD x exchange rate for the purchase price;[a] freight fees (USD 80-120 per cubic metre by sea; $3-$12 by air); [b]
                    <br />
                    Customs duty on product cost [a+b] x percentage of tariff rate = [c] 
                    <br />
                    5% commission on [a + b + c] = [d] CST/VAT (percentage according to tariff x d) = [e] when local taxes are applied  
                    <br/>
                    Local transportation to your warehouse from the port; [f] The sum owed in Indian rupees, [e + f]
                </p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="text-start rectangle-bg">
                <p className="what-does-rectangle-text-two">The costing of Product A is shown in the example below, which you can apply to your own product. 
                    <br/>
                    Product A is Costing USD 20 ordered quantity is 100pcs; Total CBM (Cubic Meter) of the material is 2 M2.  The landing cost, assuming a 15% customs duty, would be as follows:
                    <br/>
                    Purchase price: 20 X INR 65 (Exchange rate taken as 1USD= INR 65) = INR 1300 
                    <br/>
                    Freight Charges for each product: 2 M2 / 100Pcs = 0.02 (CBM/Pc) X $100 = INR 130 
                    <br/>
                    (1300+130) X 15% = INR 215 is the customs duty. Commission : [1300+130+215] x 5% = INR 82 Cost of landing: INR 1727
                    <br/>
                    Local Taxes and transport as applicable will be taken at actual. 
                </p>
            </div>
        </div>
        </div>

        {/* 3-images-section */}
        <div className="container mt-4">
            <div className="text-start">
                <h2 className="images-heading">How to Determine the Landed Cost of Imported Goods and What It Is</h2>
                <br/>
                <h5 className="images-head">3 important Information Required to Derive at costing</h5>
                <br/>
                <br/>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <img src={productprice} alt="productprice" />
                    <br/>
                    <h5>Product Price</h5>
                    <p>Price Terms:
                        <br/>
                        EXW
                        <br/>
                        FOB
                        <br/>
                        CIF
                    </p>
                </div>
                <div className="col-md-4">
                    <img src={cbm} alt="cbm" />
                    <br/>
                    <h5>CBM, Or Cubic Metre</h5>
                    <p>The amount of space it takes up 
                        <br/>
                        Length (cm), width (cm), and 
                        <br/>
                        height (cm) divided by one million 
                        <br/>
                        *cm = centimetre</p>
                </div>
                <div className="col-md-4">
                    <img src={weight} alt="weight"/>
                    <br/>
                    <p>Weight (Length x Width x 
                        <br/>
                        Height in cm) / 5000 = 
                        <br/>
                        Volumetric or Actual 
                        <br/>
                        Weight
                        <br/>
                         Kilogrammes of 
                         <br/>
                         volumetric weight</p>
                </div>
            </div>
            
            {/* What does the total landed cost include? */}
            <h2 className="what-does-heading text-center">What does the total landed cost include? </h2>
            <p className="what-does-text">As previously stated, all of the costs you incurred to complete an order and deliver it to a customer are included in the net landed cost.  Your landed price falls into five major categories:</p>

            <div className="row">
                {[
                    {
                        title: "Shipping",
                        desc: "Crating, packaging, handling, goods, and transportation are all included in the cost of shipping.  Depending on how you import and export your goods, you may be charged for air, sea, and land transportation.",
                        img: shipping
                    },
                    {
                        title: "Product",
                        desc: "The most obvious piece of information is the product.  This includes the cost per unit that you paid your supplier for the item.  Materials and components are factored into the product pricing.",
                        img: product
                    },
                    {
                        title: "Customs",
                        desc: "For both the import and export of commodities, customs costs include duties, taxes, levies, tariffs, GST, harbour fees, broking fees, and other regulatory fees.",
                        img: customs
                    },
                    {
                        title: "Risk",
                        desc: "Risk encompasses the costs you incur to safeguard your company, goods, and clients.  This entails costs for quality control, compliance, and insurance.  This also applies to any safety stock investments you may have made.",
                        img: risk
                    },
                    {
                        title: "Overhead",
                        desc: "Purchasing staff, due diligence, travel, currency conversion, payment processing fees, carrying costs, selling agency commissions, corporate income tax, and bank fees are examples of overhead costs.",
                        img: overhead
                    },
                ].map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card h-100 text-center p-3">
                        <img src={item.img} alt={item.title} className="card-img-top mx-auto"/>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>

        {/* cost calculation formula to determine the cost of imported products */}
        <div className="text-center">
            <h2 className="what-does-heading text-center">How to use the landed cost calculation formula to determine the cost of imported products </h2>
        </div>
        <div>
            <p className="what-does-text">Product + transportation + customs + risk + overhead equals the landed cost.  The total of the costs related to the product, transportation, customs, risk, and overhead-as previously mentioned—is the landed cost.  Your total landed cost is that sum. </p>
            <p className="what-does-text"> Being as exact as feasible is also crucial, and using technology automation can guarantee that.  You risk discouraging clients from buying your products if you determine that the net landed cost is excessively high.  You risk reducing your earnings if you go too low.</p>
            <strong className="what-does-head fw-bold">Obtain your initial quote at no cost:</strong>
            <p className="what-does-text"> For us to provide you with a precise estimate  Please forward the following details to us:</p>
            <ul className="what-does-points">
              <li>The size of the boxes or the order value CBM </li>
              <li>Total order weight for the HSN code</li>
              <li>Description of the product: Air/Sea</li>
            </ul>
            <p className="what-does-text"> If you have a proforma invoice and packing list, you can also share them. </p>
            <div className="request-button">
            <Link to="/request-quote">
            <button className="btn requestbutton" onClick={handleClick}>Request a Quote</button>
            </Link>
            </div>
        </div>

        {/* FAQ'S */}

        <div className="container my-5">
        <h2 className="text-center what-does-heading fw-bold">FAQ'S</h2>
      <div className="row">
        {faqs.map((faq, index) => (
          <div key={index} className="col-12 my-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold ques">Q: {faq.question}</h5>
                <p className="mb-0 ans"><strong>A:</strong> {faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default Whatdoesitcostpage3;

