import React, {Component} from 'react';
import classes from './InstructionalDesign.module.css';
import {Row, Col } from 'react-bootstrap';

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

// import JobAid from '/pdfs/jobAid.pdf'
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
                  liknSrc='/pdfs/InstructionalDesign_examples.pdf'
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
              <Col xs="12" lg="6" className={classes.PtDiv}>
                <h3>Assessment Strategies Workshop</h3>
                <br></br>
                <ViewProjectLink
                  cardImage={portfolio_prassessment}
                  liknSrc='/pdfs/AssessmentStrategiesWorkshop.pdf'
                  >
                </ViewProjectLink>
              </Col>
            </Row>
          </CenterCard>
        </div>
        <div className={classes.Elearning}>
          <LeftCard
            mainTitle="eLearning">
            <Row>
              <Col xs="12" lg="6" className={classes.PtDiv}>
                <div className={classes.ElearningTitleParentDiv}>
                  <h3>ADDIE</h3>
                  <h3>Model</h3>
                </div>
                <br></br>
                <ViewProjectLink
                  cardImage={addie_model}
                  liknSrc='https://rise.articulate.com/share/nzFmNqg8rNLRQEA5F1C2Riy_ZimopC1I'
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
              <Col xs="12" lg="6" className={classes.PtDiv}>
                <div className={classes.ElearningTitleParentDiv}>
                  <h3>Three Instructional Architectures</h3>
                </div>
                <br></br>
                <ViewProjectLink
                  cardImage={three_instructional_archs}
                  liknSrc='https://rise.articulate.com/share/YGg_8MKmXF29Qr4DF7JLXHKNQuMECxfi'
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
          </LeftCard>
        </div>
        <div>
          <RightCard
            mainTitle='Video'
            >
            <Row>
              <Col xs="12" lg="7" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={portfolio_video}
                  liknSrc="https://www.youtube.com/embed/INyQOrMdVZE?autoplay=0&rel=0"
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="12" lg="5" className={classes.PtDiv}>
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
          </RightCard>
        </div>
        <div>
          <LeftCard>
            <Row>
              <Col xs="12" lg="6" className={classes.PtDiv}>
                <div className={classes.TopTitle + classes.PtDiv}>
                  <h1 className='pl-md-5'>Curriculum Writing</h1>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  liknSrc='/pdfs/new_teacher_lunch_and_learn.pdf'
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
              <Col xs="12" lg="6" className={classes.PtDiv}>
                <div lg="6" className={classes.BottomTitle + classes.PtDiv}>
                  <h1 className='pl-md-5'>Instructional Design</h1>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_instructional_design}
                  liknSrc='/pdfs/differentiating_product.pdf'
                  >
                  </ViewProjectLink>
              </Col>
            </Row>
          </LeftCard>
        </div>
        <div className={classes.VirtualLearning}>
          <RightCard
            mainTitle="Virtual Learning">
            <Row>
              <Col xs="12" md="6" className={classes.PtDiv}>
                <div className={classes.VirtualLearningTitles}>
                  <h3>Graduate Writing Consultant</h3>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  liknSrc='/pdfs/differentiating_product.pdf'
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
              <Col xs="12" md="6" className={classes.PtDiv}>
                <div className={classes.VirtualLearningTitles}>
                  <h3>Principles of Design: Overcoming the motivation gap</h3>
                </div>
                <ViewProjectLink
                  cardImage={portfolio_curriculum_writing}
                  liknSrc='/pdfs/differentiating_product.pdf'
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
