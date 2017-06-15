import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'

import HorizontalTimeline
  from 'components/HorizontalTimeline'

import PageSplash from 'components/PageSplash'

import Waypoint from 'react-waypoint'

import { dimNavMenuAction } from 'containers/App/actions'

const HistoryContainer = css.div`
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.waypointOnEnter = this.waypointOnEnter.bind(this)
    this.waypointOnLeave = this.waypointOnLeave.bind(this)

    this.state = {
      workHistory: [
        {
          date: '2009',
          icon: 'suitcase',
          text: 'Manulife Business Processing Services'
        },
        {
          date: '2011',
          icon: 'suitcase',
          text: 'Prodigy Philippines'
        },
        {
          date: '2013',
          icon: 'suitcase',
          text: 'Beenest Technology Solutions'
        },
        {
          date: '2016',
          icon: 'suitcase',
          text: 'Social Offshore'
        }
      ]
    }
  }

  waypointOnEnter () {
    this.props.dimNavMenu(false)
  }

  waypointOnLeave () {
    this.props.dimNavMenu(true)
  }

  render () {
    return (
      <Grid relaxed>
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div style={{ width: '100%' }}>
            <PageSplash />
          </div>
        </Waypoint>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <br />
            <Header as='h2'>Background</Header>
            <p>
              Bacon ipsum dolor amet ham hock corned beef ribeye sausage andouille, meatloaf strip steak brisket jowl chuck tenderloin swine prosciutto ball tip. Shankle boudin porchetta beef hamburger. Spare ribs meatloaf chicken turkey, short ribs tongue andouille tri-tip burgdoggen turducken flank bacon. Hamburger pork chop pancetta tongue meatloaf short loin jerky. Ham hock corned beef ball tip, spare ribs drumstick alcatra cow shankle sirloin.
            </p>
            <br />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h2'>Work History</Header>
            <HistoryContainer>
              <HorizontalTimeline
                history={this.state.workHistory}
              />
            </HistoryContainer>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h3'>
              Manulife Business Processing Services
              <Header.Subheader>
                I.T Specialist
              </Header.Subheader>
              <Header.Subheader>2009-2011</Header.Subheader>
            </Header>
            <p>
              Tongue shankle spare ribs fatback biltong beef ham hock ground
              round. Beef ball tip hamburger sausage jowl landjaeger tri-tip
              rump alcatra cow salami. Pancetta pork belly corned beef pork
              bresaola, prosciutto short loin ham burgdoggen strip steak salami
              beef ribs boudin turducken. Ball tip boudin turducken pork
              andouille burgdoggen jowl jerky ham tongue pig capicola chuck
              ground round. Pork belly turducken cow brisket tenderloin meatball
              pork ball tip flank tri-tip burgdoggen frankfurter capicola beef.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h3'>
              Manulife Business Processing Services
              <Header.Subheader>
                I.T Specialist
              </Header.Subheader>
              <Header.Subheader>2009-2011</Header.Subheader>
            </Header>
            <p>
              Tongue shankle spare ribs fatback biltong beef ham hock ground
              round. Beef ball tip hamburger sausage jowl landjaeger tri-tip
              rump alcatra cow salami. Pancetta pork belly corned beef pork
              bresaola, prosciutto short loin ham burgdoggen strip steak salami
              beef ribs boudin turducken. Ball tip boudin turducken pork
              andouille burgdoggen jowl jerky ham tongue pig capicola chuck
              ground round. Pork belly turducken cow brisket tenderloin meatball
              pork ball tip flank tri-tip burgdoggen frankfurter capicola beef.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h3'>
              Manulife Business Processing Services
              <Header.Subheader>
                I.T Specialist
              </Header.Subheader>
              <Header.Subheader>2009-2011</Header.Subheader>
            </Header>
            <p>
              Tongue shankle spare ribs fatback biltong beef ham hock ground
              round. Beef ball tip hamburger sausage jowl landjaeger tri-tip
              rump alcatra cow salami. Pancetta pork belly corned beef pork
              bresaola, prosciutto short loin ham burgdoggen strip steak salami
              beef ribs boudin turducken. Ball tip boudin turducken pork
              andouille burgdoggen jowl jerky ham tongue pig capicola chuck
              ground round. Pork belly turducken cow brisket tenderloin meatball
              pork ball tip flank tri-tip burgdoggen frankfurter capicola beef.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h3'>
              Manulife Business Processing Services
              <Header.Subheader>
                I.T Specialist
              </Header.Subheader>
              <Header.Subheader>2009-2011</Header.Subheader>
            </Header>
            <p>
              Tongue shankle spare ribs fatback biltong beef ham hock ground
              round. Beef ball tip hamburger sausage jowl landjaeger tri-tip
              rump alcatra cow salami. Pancetta pork belly corned beef pork
              bresaola, prosciutto short loin ham burgdoggen strip steak salami
              beef ribs boudin turducken. Ball tip boudin turducken pork
              andouille burgdoggen jowl jerky ham tongue pig capicola chuck
              ground round. Pork belly turducken cow brisket tenderloin meatball
              pork ball tip flank tri-tip burgdoggen frankfurter capicola beef.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Home
)
