import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import './Requestaquote.css';

const Requestaquote = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center request-a-quote-heading">Request a Quote</h3>
      <Form>
        <Form.Group controlId="name" className="form-request-group">
          <Form.Label className="request-title">Your Name *</Form.Label>
          <Form.Control type="text"  className="request-body" placeholder="Your Name" required />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3 form-request-group">
          <Form.Label className="request-title">Your E-Mail *</Form.Label>
          <Form.Control type="email"  className="request-body" placeholder="Your E-Mail" required />
        </Form.Group>

        <Form.Group controlId="importValue" className="mt-3 form-request-group">
          <Form.Label className="request-title">Value of Import</Form.Label>
          <Form.Control type="text"   className="request-body"placeholder="Enter Value" />
        </Form.Group>

        <Form.Group controlId="priceTerm" className="mt-3 form-request-group">
          <Form.Label className="request-title">Price Term</Form.Label>
          <Form.Select   className="request-body">
            <option></option>
            <option>FOB</option>
            <option>CIF</option>
            <option>EXW</option>
            <option>Not Sure</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="productDescription" className="mt-3 form-request-group">
          <Form.Label className="request-title">Product Description</Form.Label>
          <Form.Control type="text" className="request-body" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group controlId="hsCode" className="mt-3 form-request-group">
          <Form.Label className="request-title">HS Code</Form.Label>
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary">-</Button>
            <Form.Control type="text" className="mx-2 text-center request-body" style={{ width: "60px" }} defaultValue="1" />
            <Button variant="outline-secondary">+</Button>
          </div>
        </Form.Group>

        <Form.Group controlId="cbm" className="mt-3 form-request-group">
          <Form.Label className="request-title">CBM (L*B*H) Cubic Meter</Form.Label>
          <Form.Control type="text"  className="request-body" placeholder="Enter Dimensions" />
          <Form.Text className="text-muted request-body">
            Length (m) x Width (m) x Height (m) = Cubic meter (m³)
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="shipmentMode" className="mt-3 form-request-group">
          <Form.Label className="request-title">Mode of Shipment</Form.Label>
          <Form.Select  className="request-body">
            <option></option>
            <option>Air</option>
            <option>Sea</option>
            <option>Mixed</option>
            <option>Container</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="weight" className="mt-3 form-request-group">
          <Form.Label className="request-title">Weight in Kgs</Form.Label>
          <Form.Control type="text"   className="request-body" placeholder="Enter Weight" />
        </Form.Group>

        <Form.Group controlId="message" className="mt-3 form-request-group">
          <Form.Label className="request-title">Your Message</Form.Label>
          <Form.Control as="textarea" rows={3}   className="request-body" placeholder="Enter your message" />
        </Form.Group>
        <div className="text-center pt-4">
        <Button type="submit" className="mt-4 request-body request-a-quote-button-btn">
          Submit
        </Button>
        </div>
        <br/>
      </Form>
    </Container>
  );
};

export default Requestaquote;

