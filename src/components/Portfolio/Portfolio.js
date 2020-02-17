import React, {Component} from 'react';
import classes from './Portfolio.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import portfolio_examples from '../../assets/images/portfolio_examples.png'
import portfolio_prassessment from '../../assets/images/portfolio_prassessment.png'

import addie_model from '../../assets/images/addie_model.png'
import three_instructional_archs from '../../assets/images/three_instructional_archs.png'
import portfolio_video from '../../assets/images/portfolio_video.png'
import portfolio_curriculum_writing from '../../assets/images/portfolio_curriculum_writing.png'
import portfolio_instructional_design from '../../assets/images/portfolio_instructional_design.png'

import CenterCard from '../../containers/Cards/CenterCard/CenterCard';
import RightCard from '../../containers/Cards/RightCard/RightCard';
import LeftCard from '../../containers/Cards/LeftCard/LeftCard';

class Portfolio extends Component {
  render(){
    return(
      <Container className={classes.PortfolioBody}>
        <div className={classes.Portfolio}>
          <h1>PORTFOLIO</h1>
        </div>
        <CenterCard
          imageleft={portfolio_examples}
          imageright={portfolio_prassessment}
          rightTitle={'Assessment Strategies'}
          >
            <p>
              Audience: Georgetown ISD Teachers
              <br>
              </br>
              Date: Spring 2019
              <br>
              </br>
              Role: Instructional Designer & Trainer
              <br>
              </br>
              Medium: Instructor-led course with workbook Tools: Adobe Indesign, Google Classroom, Nearpod
            </p>
          </CenterCard>
        <RightCard
          mainTitle={'eLearning'}
          imageleft={addie_model}
          imageright={three_instructional_archs}
          leftH2={'ADDIE Model'}
          rightH2={'Three Instructional Architectures'}
          rightLink={"https://rise.articulate.com/share/nzFmNqg8rNLRQEA5F1C2Riy_ZimopC1I"}
          >
            <p>
              Audience: Instructional Designers
              <br></br>
              Date: 2019
              <br></br>
              Role: Instructional Designer
              <br></br>
              Medium: eLearning
              <br></br>
              Tools: Articulate Rise, Google Slides, Camtasia
            </p>
          </RightCard>
        <LeftCard
          mainTitle={'Video'}
          leftH2={''}
          rightLink=''
          imageright={portfolio_video}
          >
            <h2>How to Create a Course in Rise</h2>
            <p>
              Audience: eLearning Designer
              <br></br>
              Date: 2019
              <br></br>
              Role: Instructional Designer
              <br></br>
              Medium: Video
              <br></br>
              Tools: Articulate Rise, Google Slides, Camtasia
            </p>
          </LeftCard>
          <CenterCard
            leftTitle="Curriculum Writing"
            rightTitle="Instructional Design"
            imageleft={portfolio_curriculum_writing}
            imageright={portfolio_instructional_design}
            >
              <p>
              Audience: New Teachers at Harker Heights High School
              <br></br>
              Date: 2017
              <br></br>
              Role: Instructional Designer, Curriculum Writer, Project Manager, Trainer Medium: Instructor-led Courses
              <br></br>
              Medium: Video
              <br></br>
              Tools: Trello, Schoology, Microsoft Office, Prezi, Canva
              </p>
            </CenterCard>
      </Container>
    )
  }
}

export default Portfolio;
