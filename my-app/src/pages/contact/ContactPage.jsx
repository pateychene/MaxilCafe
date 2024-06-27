import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css'; // Importe les styles spécifiques à ContactPage

function ContactPage() {
  return (
    <Container className="mt-5 contact-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>Contactez-Nous</h1>
          <p>Mon Bar/Restaurant</p>
          <p>Adresse : 123 Rue de l'Exemple, 09230 Massat</p>
          <p>Téléphone : 05 61 23 45 67</p>
          <p>Email : contact@monbarrestaurant.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
