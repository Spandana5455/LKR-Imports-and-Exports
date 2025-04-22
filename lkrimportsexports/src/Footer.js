import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Footer.css";  
import insta from './images/insta.png';
import whtsapp from './images/whtsapp.png';
import fb from './images/fb.png';

const Footer = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-section text-dark py-5 position-relative">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h5 className="fw-bold company-text">Company</h5>
            <ul className="list-unstyled company-lists">
            <li><Link to="/our-story" className="footer-link">About Us</Link></li>
            <li><Link to="/why-us" className="footer-link">Why Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </Col>

          <Col md={5}>
            <h5 className="fw-bold contact-head">Contact Us</h5>
            <p className="contact-text">
              Location: 4th Floor, Plot No: 25, 2, 4 And 5, Arunodaya Colony, 
              Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081 <br />
              Contact Us: +91 9100006518 <br />
              Email: contactlkrimportsexports@gmail.com
            </p>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold newsletter">Newsletter</h5>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter Email" className="enteremail" />
              <button className="ms-2 subscribe">Subscribe</button>
            </Form>

            <h5 className="mt-4 followus">Follow Us</h5>
            <div className="d-flex">
              <img src={insta} alt="insta" className="insta" />
              <img src={whtsapp} alt="whtsapp" className="insta" />
              <img src={fb} alt="fb" className="insta" />
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="text-start">
          <Col>
            <img 
              src="/logo.png"  
              alt="LKR Logo" 
              style={{ height: "50px", cursor: "pointer" }} 
              onClick={() => navigate('/')}
            />
          </Col>

          <Col>
            <Link to="/request-quote" className="request-link">
              <button className="px-4 py-2 requestbutton">Request a Quote</button>
            </Link>
          </Col>

          <Col className="text-end mt-5 lkrr">
            <large>© LKR Imports & Exports | All Rights Reserved</large>
          </Col>
        </Row>
      </Container>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Footer;
