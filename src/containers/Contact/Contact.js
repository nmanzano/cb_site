import React, { Component } from "react";
import {Row, Col, Form, Button, Container } from 'react-bootstrap';

import classes from './Contact.module.css';
import Aux from '../../hoc/Aux/Aux.js'
import CenterCard from '../../components/Cards/CenterCard/CenterCard';
import contact_picture from '../../assets/images/contact_picture.jpg';

class Contact extends Component {

  render() {
    return (
      <Aux>
        <div className={classes.ContactTitle}>
          <p>LET'S CONNECT</p>
        </div>
        <Container className={classes.ContactBody}>
          <Row>
            <Col md="12" lg="6" className={classes.ContactPictureCol}>
              <div className={classes.ContactPicture}>
                <img src={contact_picture} alt="" />
              </div>
            </Col>
            <Col md="12" lg="6" className={classes.ContactFieldsCol}>
              <div className={classes.ContactCard}>
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
              </div>
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Contact;
