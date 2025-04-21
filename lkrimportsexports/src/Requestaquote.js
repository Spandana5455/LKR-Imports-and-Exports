import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import './Requestaquote.css';

emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

const Requestaquote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    importValue: "",
    priceTerm: "",
    productDescription: "",
    hsCode: "",
    length: "",
    width: "",
    height: "",
    cbm: "",
    shipmentMode: "",
    weight: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const l = parseFloat(formData.length) || 0;
    const w = parseFloat(formData.width) || 0;
    const h = parseFloat(formData.height) || 0;
    const volume = (l * w * h).toFixed(3);
    setFormData(prev => ({ ...prev, cbm: volume > 0 ? `${volume} m³` : "" }));
  }, [formData.length, formData.width, formData.height]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(() => {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          importValue: "",
          priceTerm: "",
          productDescription: "",
          hsCode: 1,
          length: "",
          width: "",
          height: "",
          cbm: "",
          shipmentMode: "",
          weight: "",
          message: "",
        });
      }, (error) => {
        alert("Failed to send the request. Please try again.\n" + JSON.stringify(error));
      });
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center request-a-quote-heading">Request a Quote</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="form-request-group">
          <Form.Label className="request-title">Your Name *</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3 form-request-group">
          <Form.Label className="request-title">Your E-Mail *</Form.Label>
          <Form.Control
            type="email"
            className="request-body"
            name="email"
            placeholder="Your E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="importValue" className="mt-3 form-request-group">
          <Form.Label className="request-title">Value of Import</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="importValue"
            placeholder="Enter Value"
            value={formData.importValue}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="priceTerm" className="mt-3 form-request-group">
          <Form.Label className="request-title">Price Term</Form.Label>
          <Form.Select
            className="request-body"
            name="priceTerm"
            value={formData.priceTerm}
            onChange={handleChange}
          >
            <option></option>
            <option>FOB</option>
            <option>CIF</option>
            <option>EXW</option>
            <option>Not Sure</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="productDescription" className="mt-3 form-request-group">
          <Form.Label className="request-title">Product Description</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="productDescription"
            placeholder="Enter Description"
            value={formData.productDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="hsCode" className="mt-3 form-request-group">
          <Form.Label className="request-title">HS Code</Form.Label>
            <Form.Control
              type="text"
              className="request-body"
              name="hscode"
              placeholder="Enter 6-digitcode"
              value={formData.hsCode}
              onChange={handleChange}
            />
        </Form.Group>

        <Form.Group controlId="cbm" className="mt-3 form-request-group">
          <Form.Label className="request-title">CBM (L x B x H) Cubic Meter</Form.Label>
          <div className="d-flex gap-2 mb-2">
            <Form.Control type="number" placeholder="Length (m)" name="length" value={formData.length} onChange={handleChange} />
            <Form.Control type="number" placeholder="Width (m)" name="width" value={formData.width} onChange={handleChange} />
            <Form.Control type="number" placeholder="Height (m)" name="height" value={formData.height} onChange={handleChange} />
          </div>
          <Form.Control
            type="text"
            className="request-body"
            name="cbm"
            value={formData.cbm}
            readOnly
            placeholder="Cubic meter (m³) will be calculated"
          />
        </Form.Group>

        <Form.Group controlId="shipmentMode" className="mt-3 form-request-group">
          <Form.Label className="request-title">Mode of Shipment</Form.Label>
          <Form.Select
            className="request-body"
            name="shipmentMode"
            value={formData.shipmentMode}
            onChange={handleChange}
          >
            <option></option>
            <option>Air</option>
            <option>Sea</option>
            <option>Mixed</option>
            <option>Container</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="weight" className="mt-3 form-request-group">
          <Form.Label className="request-title">Weight in Kgs</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="weight"
            placeholder="Enter Weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="message" className="mt-3 form-request-group">
          <Form.Label className="request-title">Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="request-body"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center pt-4">
          <Button type="submit" className="mt-4 request-body request-a-quote-button-btn">
            Submit
          </Button>
        </div>
        {success && (
          <div className="text-success text-center mt-3">
            Your request has been submitted successfully!
          </div>
        )}
        <br />
      </Form>
    </Container>
  );
};

export default Requestaquote;


