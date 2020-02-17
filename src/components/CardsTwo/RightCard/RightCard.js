import React from 'react';
import classes from './RightCard.module.css';
import { Container } from 'react-bootstrap';

const rightcard = (props) => (
  <Container className={classes.Body}>
    <div className={classes.RightFiller}></div>
    {props.children}
    <div>
      <h2 className={classes.MainTitle}>{props.mainTitle}</h2>
    </div>
  </Container>
)

export default rightcard;
