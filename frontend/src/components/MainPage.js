import React from 'react';
import '../css/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainPage extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          {/* Menu */}
          <Col xs={2} className="sidebar">
            <ul className="list-unstyled">
              <li className='home'><a href="#"> Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">History</a></li>
            </ul>
          </Col>

          {/* content */}
          <Col xs={6}>
            <section>
              Hello World
            </section>
          </Col>
        </Row>
        
      </Container>

    )
  }
}

export default MainPage