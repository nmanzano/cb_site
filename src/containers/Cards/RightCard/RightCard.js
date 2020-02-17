import React, {Component} from 'react';
import classes from './RightCard.module.css'
import { Container, Row, Col } from 'react-bootstrap';

class RightCard extends Component {

  state = {
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
      <Row className={classes.RightCard}>
        <div>
          <h2 className={classes.MainTitle}>{this.props.mainTitle}</h2>
        </div>
        <Col className="col-12 col-md-6 ">
          <div className={classes.ProjectDesc}>
            <h2>{this.props.leftH2}</h2>
            <br></br>
            <a href={this.props.rightLink} target="_blank">
              <div
                onMouseOver={this.onLeftHover.bind(this)}
                onMouseLeave={() => this.setState({leftTitleShown: false})}
                className={classes.FullOverlay}>
                  <img src={this.props.imageright} alt=""></img>
                  { this.state.leftTitleShown ?
                    <div
                      className={classes.Viewproject}>
                      <h3>View Project</h3>
                    </div> : true }
              </div>
            </a>
            <br></br>
          </div>
            {this.props.children}
        </Col>
        <Col className="col-12 col-md-6 ">
          <div className={classes.ProjectDesc}>
            <h2>{this.props.rightH2}</h2>
            <br></br>
            <a href="https://rise.articulate.com/share/YGg_8MKmXF29Qr4DF7JLXHKNQuMECxfi" target="_blank">
              <div className={classes.FullOverlay}>
                <img src={this.props.imageleft} alt={this.props.imageright.name}></img>
                <div className={classes.Viewproject}>
                  <h3>View Project</h3>
                </div>
              </div>
            </a>
            <br></br>
          </div>
            {this.props.children}
        </Col>
        <div className={classes.RightFiller}>
        </div>
      </Row>
    )
  }
}

export default RightCard;
