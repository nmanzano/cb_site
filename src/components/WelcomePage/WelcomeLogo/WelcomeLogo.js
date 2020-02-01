import React from 'react';
import classes from './WelcomeLogo.module.css';
import Aux from '../../../hoc/Aux/Aux';

const welcomeLogo = (props) => (
  <Aux>
    <div className={classes.WelcomeLogoBox}>
    </div>
    <div className={classes.WelcomeLogo}>
        <h1>CASSANDRA</h1>
        <ul>
        <li>INSTRUCTIONAL DESIGNER</li>
        <li>TRAINER</li>
        <li>TECHNICAL WRITER</li>
        </ul>
    </div>
  </Aux>
)

export default welcomeLogo;
