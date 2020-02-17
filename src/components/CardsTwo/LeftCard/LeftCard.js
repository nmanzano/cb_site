import React from 'react';
import classes from './LeftCard.module.css';
import { Container } from 'react-bootstrap';

const leftcard = (props) => (
  <Container className={classes.Body}>
    <div className={classes.LeftFiller}></div>
    {props.children}
    <div className={classes.MainTitleParentDiv}>
      <h2 className={classes.MainTitle}>{props.mainTitle}</h2>
    </div>
  </Container>
)

export default leftcard;
