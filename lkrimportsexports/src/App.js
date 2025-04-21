import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from './Navbar'; 
import Home from './Home'; 
import Footer from './Footer';
import Gettingstartedpage1 from './Gettingstartedpage1';
import Importexportpage2 from './Importexportspage2';
import Whatdoesitcostpage3 from './Whatdoesitcostpage3';
import Howimportsworkpage4 from './Howimportsworkpage4';
import Ourpricingpage6 from './Ourpricingpage6';
import Factoryvisitpage5 from './Factoryvisitpage5';
import Mixedcontainerservicespage7 from './Mixedcontainerservicespage7';
import Airservicespage8 from './Airservicespage8';
import Productsourcing from './Productsourcing';
import Confirmingsample from './Confirmingsample';
import Orderproduction from './Orderproduction';
import Qualityinspection from './Qualityinspection';
import Consolidationwarehousing from './Consolidationwarehousing';
import Shippingcustoms from './Shippingcustoms';
import Ourstory from './Ourstory';
import Whyus from './Whyus';
import Contact from './Contact';
import Blogs from './Blogs';
import Sourcing from './Sourcing';
import Requestaquote from './Requestaquote';
import Kitchenfurniture from './Kitchenfurniture';
import Officefurniture from './Officefurniture';
import Hotelfurniture from './Hotelfurniture';
import Electronics from './Electronics';
import Termsofservice from './Termsofservice';
import Privacypolicy from './Privacypolicy';
import ScrollTop from './ScrollTop';

const App = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<Gettingstartedpage1 />} />
        <Route path="/imports-exports-procedure" element={<Importexportpage2 />} />
        <Route path="/what-does-it-cost" element={<Whatdoesitcostpage3 />} />
        <Route path="/how-import-works" element={<Howimportsworkpage4 />} />
        <Route path="/our-pricing" element={<Ourpricingpage6 />} />
        <Route path="/factory-visits" element={<Factoryvisitpage5 />} />
        <Route path="/mixed-container-services" element={<Mixedcontainerservicespage7 />} />
        <Route path="/mixed-air-services" element={<Airservicespage8 />} />
        <Route path="/product-sourcing" element={<Productsourcing />} />
        <Route path="/confirming-sample" element={<Confirmingsample />} />
        <Route path="/order-production" element={<Orderproduction />} />
        <Route path="/quality-inspection" element={<Qualityinspection />} />
        <Route path="/consolidation-warehousing" element={<Consolidationwarehousing />} />
        <Route path="/shipping-customs" element={<Shippingcustoms />} />
        <Route path="/our-story" element={<Ourstory />} />
        <Route path="/why-us" element={<Whyus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office-furniture" element={<Sourcing />} />
        <Route path="/kitchens-wardrobes" element={<Sourcing />} />
        <Route path="/hotel-furniture" element={<Sourcing />} />
        <Route path="/home-furniture" element={<Sourcing />} />
        <Route path="/planning-design" element={<Sourcing />} />
        <Route path="/builders-projects" element={<Sourcing />} />
        <Route path="/floors-walls" element={<Sourcing />} />
        <Route path="/restaurant-furniture" element={<Sourcing />} />
        <Route path="/school-furniture" element={<Sourcing />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/request-quote" element={<Requestaquote />} />
        <Route path="/blogs/office-furniture" element={<Officefurniture />} />
        <Route path="/blogs/dining-kitchen" element={<Kitchenfurniture />} />
        <Route path="/blogs/hotel-furnishings" element={<Hotelfurniture />} />
        <Route path="/blogs/electronics" element={<Electronics />} />
        <Route path="/terms" element={<Termsofservice />} />
        <Route path="/privacy" element={<Privacypolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


