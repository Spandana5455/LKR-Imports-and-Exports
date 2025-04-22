import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from "emailjs-com";
import './Requestaquote.css';

emailjs.init("rjpYlBKZsZI3aCnkB");

const Requestaquote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    value: "",
    priceTerm: "",
    description: "",
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

    emailjs.send("service_mqjr4k3", "template_l8h8n6l", formData)
      .then(() => {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          type: "",
          value: "",
          priceTerm: "",
          description: "",
          hsCode: "",
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
      <h3 className="text-center request-a-quote-heading">Import/Export Quotation Request</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-request-group">
          <Form.Label className="request-title">Your Name *</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Your E-Mail *</Form.Label>
          <Form.Control
            type="email"
            className="request-body"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your E-mail"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Company *</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Your company name"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Request Type *</Form.Label>
          <Form.Select
            className="request-body"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="Import">Import</option>
            <option value="Export">Export</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Value of Import/Export *</Form.Label>
          <Form.Control
            type="number"
            className="request-body"
            name="value"
            value={formData.importValue}
            onChange={handleChange}
            required
            placeholder="Enter total value in USD"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Price Term *</Form.Label>
          <Form.Select
            className="request-body"
            name="priceTerm"
            value={formData.priceTerm}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="FOB">FOB</option>
            <option value="CIF">CIF</option>
            <option value="EXW">EXW</option>
            <option value="Not Sure">Not Sure</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Product Description *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="request-body"
            name="description"
            value={formData.productDescription}
            onChange={handleChange}
            required
            placeholder="Describe the product you are importing or exporting"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">HS Code *</Form.Label>
          <Form.Control
            type="text"
            className="request-body"
            name="hsCode"
            value={formData.hsCode}
            onChange={handleChange}
            required
             placeholder="Enter 6-digit HS Code"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">CBM (L x B x H) *</Form.Label>
          <div className="d-flex gap-2 mb-2">
            <Form.Control type="number" placeholder="Length (m)" name="length" value={formData.length} onChange={handleChange} required />
            <Form.Control type="number" placeholder="Width (m)" name="width" value={formData.width} onChange={handleChange} required />
            <Form.Control type="number" placeholder="Height (m)" name="height" value={formData.height} onChange={handleChange} required />
          </div>
          <Form.Control
            type="text"
            className="request-body"
            name="cbm"
            value={formData.cbm}
            readOnly
            required
            placeholder="Cubic meter (m³) will be calculated"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Mode of Shipment *</Form.Label>
          <Form.Select
            className="request-body"
            name="shipmentMode"
            value={formData.shipmentMode}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option>Air</option>
            <option>Sea</option>
            <option>Mixed</option>
            <option>Container</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Weight in Kgs *</Form.Label>
          <Form.Control
            type="number"
            className="request-body"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            placeholder="Enter total weight in kilograms"
          />
        </Form.Group>

        <Form.Group className="mt-3 form-request-group">
          <Form.Label className="request-title">Your Message *</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            className="request-body"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center pt-4">
          <Button type="submit" className="mt-4 request-body request-a-quote-button-btn">
            Submit Request
          </Button>
        </div>

        {success && (
          <div className="text-success text-center mt-3">
            Your request has been submitted successfully!
          </div>
        )}
      </Form>
      <br/>
      <br/>
    </Container>
  );
};

export default Requestaquote;



