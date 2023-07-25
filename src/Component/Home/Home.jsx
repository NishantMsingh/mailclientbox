import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <h1 className="text-center">Welcome to your mail box</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
