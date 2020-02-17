import React, {Component} from 'react';
import classes from './TechnicalWriting.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Aux from '../../hoc/Aux/Aux.js'

import CenterCard from '../../components/CardsTwo/CenterCard/CenterCard';
import LeftCard from '../../components/CardsTwo/LeftCard/LeftCard';
import RightCard from '../../components/CardsTwo/RightCard/RightCard';

import portfolio_examples from '../../assets/images/portfolio_examples.png'
import projectproposal_staar from '../../assets/images/ProjectProposal_staar.png'
import projectproposal_phases from '../../assets/images/ProjectProposal_phases.png'
import usermanual_intro from '../../assets/images/usermanual_intro.png'
import user_manual_continue from '../../assets/images/user_manual_continue.png'
import job_description from '../../assets/images/job_description.png'
import jobaids from '../../assets/images/jobaids.png'


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
                    <li>Audience: Instructional Designers, Trainers</li>
                    <li>Date: 2019</li>
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
                  <ul className={classes.CurriculumStyle}>
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
                  cardImage={projectproposal_staar}
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={projectproposal_phases}
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
          <RightCard
            mainTitle="User Manual"
            >
            <Row>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={usermanual_intro}
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={user_manual_continue}
                  >
                </ViewProjectLink>
              </Col>
            </Row>
            <div>
              <ul>
                <li>Audience: Graduate Students</li>
                <li>Date: 2019</li>
                <li>Role: Technical Writer, Curriculum Developer</li>
                <li>Medium: PDF</li>
                <li>Tools: Blackboard, Adobe Creative Suite, Grammerly, Curriculum Mapping</li>
              </ul>
            </div>
          </RightCard>
        </div>
        <div className={classes.JobDescription}>
          <LeftCard
            mainTitle="Job Description"
            >
            <div className={classes.JobDescriptionSpacer}></div>
            <Row>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={job_description}
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="6">
                <ul>
                  <li>
                    <h2>Job Description and Expectations</h2>
                  </li>
                  <li>Audience: Homebound Teachers at Harker Heights High School</li>
                  <li>Date: 2018</li>
                  <li>Role: Project Manager, Technical Writer</li>
                  <li>Medium: PDF</li>
                  <li>Tools: Adobe Creative Suite, Microsoft Office, Trello, Remind</li>
                </ul>
                </Col>
              </Row>
              <div className={classes.JobDescriptionSpacer}></div>
            </LeftCard>
          </div>
        <div className={classes.JobAids}>
          <RightCard
            mainTitle="Job Aids"
            >
            <Row>
              <Col xs="12" lg="6">
                <ul>
                  <li><h2>How to Request a Substitute</h2></li>
                  <li>Audience: New Teachers at Georgetown High School</li>
                  <li>Date: 2018</li>
                  <li>Role: Technical Writer</li>
                  <li>Medium: PDF</li>
                  <li>Tools: Google Classroom, Google Suite</li>
                </ul>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={jobaids}
                  >
                  </ViewProjectLink>
              </Col>
            </Row>
          </RightCard>
        </div>
      </Aux>
    )
  }

}

export default TechnicalWriting;
