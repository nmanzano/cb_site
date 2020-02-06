import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact className={classes.NavName}>CASSANDRA</NavigationItem>
    <NavigationItem link="/home">HOME</NavigationItem>
    <NavigationItem link="/instructional-design">INSTRUCTIONAL DESIGN</NavigationItem>
    <NavigationItem link="/technical-writing">TECHNICAL WRITING</NavigationItem>
    <NavigationItem link="/contact">CONTACT</NavigationItem>
  </ul>
)

export default navigationItems
