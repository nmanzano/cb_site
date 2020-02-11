import React, {Component} from 'react';
import classes from './Portfolio.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import portfolio_examples from '../../assets/images/portfolio_examples.png'
import portfolio_prassessment from '../../assets/images/portfolio_prassessment.png'

import addie_model from '../../assets/images/addie_model.png'
import three_instructional_archs from '../../assets/images/three_instructional_archs.png'

import CenterCard from '../../containers/Cards/CenterCard/CenterCard';
import RightCard from '../../containers/Cards/RightCard/RightCard';

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
          ></CenterCard>
        <RightCard
          mainTitle={'eLearning'}
          imageleft={addie_model}
          imageright={three_instructional_archs}
          leftH2={'ADDIE Model'}
          rightH2={'Three Instructional Architectures'}
          rightLink={"https://rise.articulate.com/share/nzFmNqg8rNLRQEA5F1C2Riy_ZimopC1I"}
          ></RightCard>
      </Container>
    )
  }
}

export default Portfolio;
