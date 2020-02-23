import React from 'react';
import classes from './LeftCard.module.css';
import { Container } from 'react-bootstrap';

const leftcard = (props) => (
  <Container className={classes.Body}>
    <div className={classes.LeftFiller}></div>
    {props.children}
    <div className={classes.MainTitleParentDiv}>
      <div className={classes.MainTitleWrapper}>
        <h1 className={classes.MainTitle}>{props.mainTitle}</h1>
      </div>
    </div>
  </Container>
)

export default leftcard;
