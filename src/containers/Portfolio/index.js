/**
*
* Portfolio
*
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from 'styled-components'

import Waypoint from 'react-waypoint'

import {
  Button,
  Card,
  Grid,
  Header
} from 'semantic-ui-react'
import { NoPaddingGrid } from 'components/CommonJS'

import { dimNavMenuAction } from 'containers/App/actions'
import {
  SwitchToLinkAction
} from 'components/MainNav/actions'

import PageSplash from 'components/PageSplash'
import PortfolioItem from './sections/PortfolioItem'

const PortfolioPageContainer = css.div`
  display: flex;
  flex-direction: column;
  width: 100%
`

const PortfolioContainer = css.div`
  margin: 0 1em;
`

class Portfolio extends Component {
  constructor (props, context) {
    super(props, context)

    this.waypointOnEnter = this.waypointOnEnter.bind(this)
    this.waypointOnLeave = this.waypointOnLeave.bind(this)
  }

  componentDidMount () {
    this.props.switchToLink(true)
  }

  waypointOnEnter () {
    this.props.dimNavMenu(false)
  }

  waypointOnLeave () {
    this.props.dimNavMenu(true)
  }

  render () {
    return (
      <PortfolioPageContainer>
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div style={{ width: '100%' }}>
            <PageSplash
              title='Portfolio'
              backgroundUrl='/assets/images/splash.cover.web.jpg'
            />
          </div>
        </Waypoint>
        <PortfolioContainer>
          <br />
          <NoPaddingGrid columns={1} centered>
            <Grid.Column widescreen={8} computer={16}>
              <NoPaddingGrid columns={1} centered>
                <Grid.Column
                  computer={13}
                  widescreen={16}
                  mobile={16}>
                  <Header as='h2'>Work Projects</Header>
                  <p>
                    There are some of the projects I've worked in during my career. I didn't include all of them since they're mainly derivatives of these projects. These are my milestone projects where I used new solutions and techniques in developing apps.
                  </p>
                </Grid.Column>
                <PortfolioItem
                  title='Be Cash Ready'
                  color='blue'
                  subheader='SPA using React and NodeJS'
                  platform='web'
                  background='/assets/images/becashready.png'>
                  <p>
                    Pork venison leberkas t-bone jowl. Ham hock filet mignon sausage ball tip jerky turducken alcatra pork chop tongue tenderloin chuck rump turkey. Pastrami pancetta short loin flank porchetta, venison sausage ham. Tenderloin cow picanha fatback, hamburger rump swine landjaeger.
                  </p>
                  <div>
                    <Button inverted basic>
                      Description
                    </Button>
                  </div>
                </PortfolioItem>
                <PortfolioItem
                  title='A-nest Consulting'
                  color='green'
                  subheader='Web Application using Angular 1 and FuelPHP'
                  platform='web'
                  background='assets/images/anest-consulting.jpg'>
                  <p>
                    Pork venison leberkas t-bone jowl. Ham hock filet mignon sausage ball tip jerky turducken alcatra pork chop tongue tenderloin chuck rump turkey. Pastrami pancetta short loin flank porchetta, venison sausage ham. Tenderloin cow picanha fatback, hamburger rump swine landjaeger.
                  </p>
                  <div>
                    <Button inverted basic>
                      Description
                    </Button>
                  </div>
                </PortfolioItem>
                <PortfolioItem
                  title='Sumi Lab'
                  color='brown'
                  subheader='Web Application using JQuery and FuelPHP'
                  background='/assets/images/sumilab.jpg'
                  platform='web'>
                  <p>
                    Pork venison leberkas t-bone jowl. Ham hock filet mignon sausage ball tip jerky turducken alcatra pork chop tongue tenderloin chuck rump turkey. Pastrami pancetta short loin flank porchetta, venison sausage ham. Tenderloin cow picanha fatback, hamburger rump swine landjaeger.
                  </p>
                  <div>
                    <Button inverted basic>
                      Description
                    </Button>
                  </div>
                </PortfolioItem>
              </NoPaddingGrid>
            </Grid.Column>
            <Grid.Column widescreen={8} computer={16}>
              <NoPaddingGrid columns={1} centered>
                <Grid.Column
                  computer={13}
                  widescreen={8}
                  mobile={16}>
                  <Header as='h2'>Hobby Projects</Header>
                  <p>
                    Projects that I do in my spare time. Normally improve on the techniques I learned at work, or create new ones from articles and blog posts I've read.
                  </p>
                </Grid.Column>
                <PortfolioItem
                  title='MeganeMe'
                  color='orange'
                  subheader='Web Application using JQuery and FuelPHP'
                  background='/assets/images/megane-me.jpg'
                  platform='web'>
                  <p>
                    Pork venison leberkas t-bone jowl. Ham hock filet mignon sausage ball tip jerky turducken alcatra pork chop tongue tenderloin chuck rump turkey. Pastrami pancetta short loin flank porchetta, venison sausage ham. Tenderloin cow picanha fatback, hamburger rump swine landjaeger.
                  </p>
                  <div>
                    <Button inverted basic>
                      Description
                    </Button>
                    <Button inverted basic>
                      Github
                    </Button>
                  </div>
                </PortfolioItem>
              </NoPaddingGrid>
            </Grid.Column>
            <Grid.Column widescreen={8} computer={16}>
              <NoPaddingGrid columns={1} centered>
                <Grid.Column
                  computer={13}
                  widescreen={8}
                  mobile={16}>
                  <Header as='h2'>Github Projects</Header>
                  <p>
                    Some of my Github projectst that are mainly porducts, but more of toolset.
                  </p>
                </Grid.Column>
                <Grid.Column computer={4}>
                  <Card>
                    <Card.Content>
                      <Card.Header>AAA</Card.Header>
                      <Card.Description>
                        Bacon ipsum dolor amet tenderloin cupim cow, venison pork belly doner rump ham hock shank pork loin kevin alcatra biltong burgdoggen meatball. Cupim kielbasa sirloin turducken flank tongue beef kevin ball tip ribeye bacon pork.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button size='small'>
                        Github
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column computer={4}>
                  <Card>
                    <Card.Content>
                      <Card.Header>AAA</Card.Header>
                      <Card.Description>
                        Bacon ipsum dolor amet tenderloin cupim cow, venison pork belly doner rump ham hock shank pork loin kevin alcatra biltong burgdoggen meatball. Cupim kielbasa sirloin turducken flank tongue beef kevin ball tip ribeye bacon pork.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button size='small'>
                        Github
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </NoPaddingGrid>
            </Grid.Column>
          </NoPaddingGrid>
        </PortfolioContainer>
      </PortfolioPageContainer>
    )
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    dimNavMenu: payload =>
      dispatch(dimNavMenuAction(payload)),
    switchToLink: payload =>
      dispatch(SwitchToLinkAction(payload)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Portfolio
)
