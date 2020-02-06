import React from 'react';
import classes from './WelcomeLogo.module.css';
import Aux from '../../../hoc/Aux/Aux';
import { Container, Row, Col } from 'react-bootstrap';

const welcomeLogo = (props) => (
  <Aux>
    <Container className={classes.ContainerColor}>
      <Row style={{zIndex:'0'}} className={classes.Box}></Row>
      <Row style={{zIndex:'2', paddingTop:'20px'}} className="justify-content-center"><h1>CASSANDRA</h1></Row>
      <Row style={{zIndex:'2'}} className={"justify-content-sm-center" + ' ' + classes.subheadings}>
        <Col style={{textAlign:'center', backgroundColor: '#f3f3f3'}} xs md="auto">INSTRUCTIONAL DESIGNER</Col>
        <Col style={{textAlign:'center'}} xs md="auto"><span className={classes.Dot}></span></Col>
        <Col style={{textAlign:'center'}} xs md="auto">TRAINER</Col>
        <Col style={{textAlign:'center'}} xs md="auto"><span className={classes.Dot}></span></Col>
        <Col style={{textAlign:'center', backgroundColor: '#f3f3f3'}} xs md="auto">TECHNICAL WRITER</Col>
      </Row>
      <Row className={classes.Arrow}>
        <div></div>
      </Row>
    </Container>
  </Aux>
)

export default welcomeLogo;
