import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './homepage.css'; // Import des styles spécifiques à HomePage

function HomePage() {
  return (
    <Container className="mt-5 homepage-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="homepage-title">Bienvenue au Maxil</h1>
          <p className="homepage-description">
            Découvrez nos spécialités culinaires et notre ambiance chaleureuse au cœur de la vallée de l'arac.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

