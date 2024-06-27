import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './homepage.css'; // Importe les styles spécifiques à HomePage

function HomePage() {
  return (
    <Container className="mt-5 homepage-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>Bienvenue à Mon Bar/Restaurant</h1>
          <p>Découvrez nos spécialités culinaires et notre ambiance chaleureuse au cœur de Massat, Ariège.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
