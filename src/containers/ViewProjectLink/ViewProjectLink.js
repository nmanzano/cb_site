import React, {Component} from 'react';
import classes from './ViewProjectLink.module.css'


class ViewProjectLink extends Component {
  state ={
    titleHover: false
  }

  onHover = (e) => {
    this.setState({ titleHover: true });
  }

  render(){
    return(
      <div className={classes.Projectdesc}>
        <a href="/" target="_blank">
          <div
            onMouseOver={this.onHover.bind(this)}
            onMouseLeave={() => this.setState({titleHover: false})}
            className={classes.FullOverlay}>
              <img src={this.props.cardImage} alt="?"></img>
            { this.state.titleHover ?
            <div
              className={classes.Viewproject}>
              <h3>View Project</h3>
            </div> : true }
          </div>
        </a>
      </div>
    )
  }
}

export default ViewProjectLink;
