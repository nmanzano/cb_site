import React, {Component} from 'react';
import classes from './InstructionalDesign.module.css'
import { Container, Row, Col } from 'react-bootstrap';

import Aux from '../../hoc/Aux/Aux.js'

import CenterCard from '../../components/Cards/CenterCard/CenterCard';
import LeftCard from '../../components/Cards/LeftCard/LeftCard';
import RightCard from '../../components/Cards/RightCard/RightCard';

import portfolio_examples from '../../assets/images/portfolio_examples.png'
import portfolio_prassessment from '../../assets/images/portfolio_prassessment.png'
import addie_model from '../../assets/images/addie_model.png'
import three_instructional_archs from '../../assets/images/three_instructional_archs.png'
import portfolio_video from '../../assets/images/portfolio_video.png'
import portfolio_curriculum_writing from '../../assets/images/portfolio_curriculum_writing.png'
import portfolio_instructional_design from '../../assets/images/portfolio_instructional_design.png'

import ViewProjectLink from "../ViewProjectLink/ViewProjectLink";

class InstructionalDesign extends Component{

  render(){
    return(
      <Aux>
        <div>
          <div className={classes.Portfolio}>
            <h1>PORTFOLIO</h1>
          </div>
          <CenterCard>
            <Row>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={portfolio_examples}
                  >
                </ViewProjectLink>
                <br></br>
                <ul>
                  <li>Audience: Georgetown ISD Teachers</li>
                  <li>Date: Spring 2019</li>
                  <li>Role: Instructional Designer & Trainer</li>
                  <li>Medium: Instructor-led course with workbook</li>
                  <li>Tools: Adobe Indesign, Google Classroom, Nearpod</li>
                </ul>
              </Col>
              <Col xs="12" lg="6">
                <h3>Assessment Strategies Workshop</h3>
                <br></br>
                <ViewProjectLink
                  cardImage={portfolio_prassessment}
                  >
                </ViewProjectLink>
              </Col>
            </Row>
          </CenterCard>
        </div>
        <div className={classes.Elearning}>
          <RightCard
            mainTitle="eLearning">
            <Row>
              <Col xs="12" lg="6">
                <div className={classes.ElearningTitleParentDiv}>
                  <h3>ADDIE</h3>
                  <h3>Model</h3>
                </div>
                <br></br>
                <ViewProjectLink
                  cardImage={addie_model}
                  >
                </ViewProjectLink>
                <br></br>
                <div>
                  <ul>
                    <li>Audience: Instructional Designers</li>
                    <li>Date: 2019</li>
                    <li>Role: Instructional Designer</li>
                    <li>Medium: eLearning</li>
                    <li>Tools: Articulate Rise, Google Slides, Camtasia</li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="6">
                <div className={classes.ElearningTitleParentDiv}>
                  <h3>Three Instructional Architectures</h3>
                </div>
                <br></br>
                <ViewProjectLink
                  cardImage={three_instructional_archs}
                  >
                </ViewProjectLink>
                <br></br>
                <div>
                  <ul>
                    <li>Audience: Instructional Designers</li>
                    <li>Date: 2019</li>
                    <li>Role: Instructional Designer</li>
                    <li>Medium: eLearning</li>
                    <li>Tools: Articulate Rise, Google Slides, Camtasia</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </RightCard>
        </div>
        <div>
          <LeftCard
            mainTitle='Video'
            >
            <Row>
              <Col xs="12" lg="7">
                <ViewProjectLink
                  cardImage={portfolio_video}
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="5">
                <div className={classes.VideoTextDiv}>
                  <ul>
                    <li><h3>How to Create a Course in Rise</h3></li>
                    <li>Audience: eLearning Designer</li>
                    <li>Date: 2019</li>
                    <li>Role: Instructional Designer</li>
                    <li>Medium: Video</li>
                    <li>Tools: Articulate Rise, Google Slides, Camtasia</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </LeftCard>
        </div>
        <div>
          <CenterCard>
            <Row>
              <Col lg="7" className={classes.TopTitle}>
                <h1 className='pl-md-5'>Curriculum Writing</h1>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  >
                </ViewProjectLink>
                <div>
                  <ul>
                    <li>Audience: New Teachers at Harker Heights High School</li>
                    <li>Date: 2017</li>
                    <li>Role: Instructional Designer, Curriculum Writer, Project Manager, Trainer</li>
                    <li>Medium: Instructor-led Courses</li>
                    <li>Tools: Trello, Schoology, Microsoft Office, Prezi, Canva</li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="6">
                <ViewProjectLink
                  cardImage={portfolio_instructional_design}
                  >
                  </ViewProjectLink>
              </Col>
              <Col xs="12" lg="11" className={classes.BottomTitle}>
                <h1 className='pl-lg-5 float-md-right'>Instructional Design</h1>
            </Col>
            </Row>
          </CenterCard>
        </div>
        <div className={classes.VirtualLearning}>
          <RightCard
            mainTitle="Virtual Learning">
            <Row>
              <Col xs="12" md="6">
                <div className={classes.VirtualLearningTitles}>
                  <h3>Graduate Writing Consultant</h3>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  >
                </ViewProjectLink>
                <ul>
                  <li>Audience: Arizona State University Graduate students</li>
                  <li>Date: 2019</li>
                  <li>Role: Trainer, Coach</li>
                  <li>Medium: eLearning</li>
                  <li>Tools: Adobe Connect, Microsoft Zoom</li>
                </ul>
              </Col>
              <Col xs="12" md="6">
                <div className={classes.VirtualLearningTitles}>
                  <h3>Principles of Design: Overcoming the motivation gap</h3>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  >
                </ViewProjectLink>
                <ul>
                  <li>Audience: Instructional Designers, Trainers</li>
                  <li>Date: 2019</li>
                  <li>Role: Instructional Designer</li>
                  <li>Medium: eLearning</li>
                  <li>Tools: Adobe Captivate</li>
                </ul>
              </Col>
            </Row>
          </RightCard>
        </div>
      </Aux>
    )
  }

}

export default InstructionalDesign;
