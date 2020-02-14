import React from 'react';
import classes from './Home.module.css';
// import Aux from '../../hoc/Aux/Aux';
import { Container, Row } from 'react-bootstrap';
import headshot from '../../assets/images/headshot.jpg';

const home = (props) => (
    <Container className={classes.HomeBody}>
      <div className={classes.TRYTHIS}></div>
      <div className={classes.Content}>
        <div className={classes.Thumbnail}>
          <div className={classes.Title}>
            <h1>WELCOME</h1>
          </div>
          <div>
            <img src={headshot} alt="" />
          </div>
          <div className={classes.Caption}>
            <p>
              I am a life-long learner with a passion for helping people reach their highest potential,
              which is why I've spent most of my life in education.
            </p>
            <p>
              After high school, I attended Texas A&M University where I graduated with a degree in English and Psychology.
              Upon graduation, I began teaching High School English at Harker Heights High School,
              and after four rewarding years supporting student growth and achievement,
              I began my Master's Degree in Educational Leadership and Instructional Design at Arizona State University.
              While attending graduate school, I began working as a mentor teacher and instructional coach, and in 2018,
              I began my year-long High School Principal Internship. These combined experiences sparked my interest in
              adult education, so in 2019, I began working as a Graduate Writing Consultant for Arizona State University,
              and I began my Training and Development Internship at Vrbo.
            </p>
            <p>
              My portfolio contains some of the projects I've completed as an Instructional Designer,
              Project Manager, and Technical Writer. Please feel free to reach out to me with any questions,
              and I look forward to working with you on your next project.
            </p>
          </div>
        </div>
      </div>
    </Container>
)

export default home;
