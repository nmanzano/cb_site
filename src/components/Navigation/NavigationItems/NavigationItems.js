import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import {Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const navigationItems = (props) => (
  <Navbar className={classes.NavBarStyle} collapseOnSelect expand="lg" bg="#f3f3f3" variant="light">
    <Navbar.Brand href="/" className={classes.NavigationItems}>CASSANDRA</Navbar.Brand>
    <Navbar.Toggle className={classes.NavBarMobile} aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className={classes.NavLink + " ml-auto"}>
        <NavLink to="/home" className="nav-link">HOME</NavLink>
        <NavLink to="/instructional-design" className="nav-link">INSTRUCTIONAL DESIGN</NavLink>
        <NavLink to="/technical-writing" className="nav-link">TECHNICAL WRITING</NavLink>
        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default navigationItems
