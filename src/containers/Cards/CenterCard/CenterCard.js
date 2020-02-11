import React, {Component} from 'react';
import classes from './CenterCard.module.css';
// import Aux from '../../../../hoc/Aux/Aux'
import { Row, Col } from 'react-bootstrap';


class CenterCard extends Component {

  state ={
    rightTitleShown: false,
    leftTitleShown: false
  }

  onRightHover = (e) => {
    this.setState({ rightTitleShown: true });
  }

  onLeftHover = (e) => {
    this.setState({ leftTitleShown: true });
  }

  render(){

    return(
      <Row className={classes.Projectcard}>
        <Col className={"col-12 col-md-6 " + classes.Projectheader}>
          <div className={classes.Projectdesc}>
            <a href="/" target="_blank">
              <div
                onMouseOver={this.onLeftHover.bind(this)}
                onMouseLeave={() => this.setState({leftTitleShown: false})}
                className={classes.FullOverlay}>
                <img src={this.props.imageleft} alt="?"></img>
                { this.state.leftTitleShown ?
                  <div
                    className={classes.Viewproject}>
                    <h3>View Project</h3>
                  </div> : true }
                </div>
            </a>
            <br>
            </br>
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
          </div>
        </Col>
        <Col className="col-12 col-md-6 ">
          <h2>{this.props.rightTitle}</h2>
          <br></br>
          <a href="/" target="_blank">
            <div
              onMouseOver={this.onRightHover.bind(this)}
              onMouseLeave={() => this.setState({rightTitleShown: false})}
              className={classes.FullOverlay}>
              <img src={this.props.imageright} alt="?"></img>
              { this.state.rightTitleShown ?
                <div className={classes.Viewproject}>
                  <h3>View Project</h3>
                </div> : true }
            </div>
          </a>
        </Col>
      </Row>
    )
  }
}

export default CenterCard;
