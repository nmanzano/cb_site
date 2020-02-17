import React, {Component} from 'react';
import classes from './TechnicalWriting.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Aux from '../../hoc/Aux/Aux.js'

import CenterCard from '../../components/CardsTwo/CenterCard/CenterCard';
import LeftCard from '../../components/CardsTwo/LeftCard/LeftCard';
import RightCard from '../../components/CardsTwo/RightCard/RightCard';

import portfolio_examples from '../../assets/images/portfolio_examples.png'
import ProjectProposal_staar from '../../assets/images/ProjectProposal_staar.png'
import ProjectProposal_phases from '../../assets/images/ProjectProposal_phases.png'
import ViewProjectLink from "../ViewProjectLink/ViewProjectLink"

class TechnicalWriting extends Component{

  render(){
    return(
      <Aux>
        <div className={classes.Intro}>
          <div className={classes.Portfolio}>
            <h1>PORTFOLIO</h1>
          </div>
          <CenterCard>
              <Row>
                <Col xs="12" lg="6">
                  <ul>
                    <li><h2>Storyboarding</h2></li>
                    <li>Audience: Instructional Designers, Trainers Date: 2019</li>
                    <li>Role: Instructional Designer</li>
                    <li>Medium: Google Doc</li>
                    <li>Tools: Google Suite</li>
                  </ul>
                  <ViewProjectLink
                    cardImage={portfolio_examples}
                    >
                  </ViewProjectLink>
                </Col>
                <Col xs="12" lg="6">
                  <ViewProjectLink
                    cardImage={portfolio_examples}
                    >
                  </ViewProjectLink>
                  <ul>
                    <li><h2>Curriculum Writing</h2></li>
                    <li>Audience: Instructional Designers, Curriculum Department</li>
                    <li>Date: 2017</li>
                    <li>Role: Curriculum Developer</li>
                    <li>Medium: Schoology</li>
                    <li>Tools: Microsoft Office, Schoology</li>
                  </ul>
                </Col>
              </Row>
          </CenterCard>
        </div>
        <div className={classes.ProjectProposal}>
          <LeftCard
            mainTitle='Project Proposal'
            >
            <Row>
              <Col xs="12" lg="6">
                <h3>Project Management Plan: English</h3>
                <h3>STAAR Boocamp</h3>
                <ViewProjectLink
                  cardImage={ProjectProposal_staar}
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={ProjectProposal_phases}
                  >
                </ViewProjectLink>
                <ul>
                  <li>Audience: Harker Heights High School Administration</li>
                  <li>Date: 2017</li>
                  <li>Role: Project Manager, Technical Writer</li>
                  <li>Medium: Formally Written Proposal</li>
                  <li>Tools: Adobe Create Suite, Turnitin, LucidChart, Scoro</li>
                </ul>
              </Col>
            </Row>
          </LeftCard>
        </div>
        <div className={classes.UserManual}>
          <RightCard>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </RightCard>
        </div>
        <div className={classes.JobDescription}>
          This is JobDescription
        </div>
        <div className={classes.JobAids}>
          This is JobAids
        </div>
      </Aux>
    )
  }

}

export default TechnicalWriting;
