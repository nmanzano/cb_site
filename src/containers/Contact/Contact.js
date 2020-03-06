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
          <p>LET'S CONNECT</p>
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
                    <Col md={12} className={classes.EmailInput}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email address" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Write your message" />
                    </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Button className={classes.ButtonStyle + " col-sm-12 col-lg-4"} variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                </Row>
                </Form>
              </Col>
            </Row>
          </CenterCard>
        </div>
      </Aux>
    );
  }
}

export default Contact;
