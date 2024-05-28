import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="text-center my-5">
            <Row>
                <Col md={6} className="bg-primary text-white p-4">
                    <h2>Column 1</h2>
                    <p>This is a visually appealing layout using the grid system approach.</p>
                    <Button variant="light">Click me</Button>
                </Col>
                <Col md={6} className="bg-secondary text-white p-4">
                    <h2>Column 2</h2>
                    <p>Responsive and stunning design to enhance user experience.</p>
                    <Button variant="light">Explore</Button>
                </Col>
            </Row>
        </Container>
  );
}

export default App;
