import React, { Component } from "react";
import {Row, Col, Form, Button } from 'react-bootstrap';

import classes from './Contact.module.css';
import Aux from '../../hoc/Aux/Aux.js'
import CenterCard from '../../components/Cards/CenterCard/CenterCard';

class Contact extends Component {

  render() {
    return (
      <Aux>
        <div className={classes.Contact}>
          <h1>LET'S CONNECT</h1>
        </div>
        <div className={classes.Attempt}>
          <CenterCard>
            <Row>
              <Col xs="12" lg="6">
                <h1>image</h1>
              </Col>
              <Col xs="12" lg="6">
                <Form>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </CenterCard>
        </div>
      </Aux>
    );
  }
}

export default Contact;
