import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'

import HorizontalTimeline
  from 'components/HorizontalTimeline'

import PageSplash from 'components/PageSplash'
import CompanyBlurb from './sections/CompanyBlurb'

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
        <CompanyBlurb
          imagePath='/assets/images/manulife-logo.png'
          company='Manulife Business Processing Services'
          year='20xx - 20xx'
          position='IT Specialist'
          backgroundColor={{
            image: '#2E7D32',
            text: '#43A047'
          }}>
          <p>
            Bacon ipsum dolor amet ham hock corned beef ribeye sausage andouille, meatloaf strip steak brisket jowl chuck tenderloin swine prosciutto ball tip. Shankle boudin porchetta beef hamburger. Spare ribs meatloaf chicken turkey, short ribs tongue andouille tri-tip burgdoggen turducken flank bacon. Hamburger pork chop pancetta tongue meatloaf short loin jerky. Ham hock corned beef ball tip, spare ribs drumstick alcatra cow shankle sirloin.
          </p>
        </CompanyBlurb>
        <CompanyBlurb
          imagePath='/assets/images/prodigy-logo.png'
          imgSize='medium'
          company='Prodigy Group Philippines'
          year='20xx - 20xx'
          position='Business Consulting Manager'
          reversed='computer'
          backgroundColor={{
            image: '#616161',
            text: '#9E9E9E'
          }}>
          <p>
            Bacon ipsum dolor amet ham hock corned beef ribeye sausage andouille, meatloaf strip steak brisket jowl chuck tenderloin swine prosciutto ball tip. Shankle boudin porchetta beef hamburger. Spare ribs meatloaf chicken turkey, short ribs tongue andouille tri-tip burgdoggen turducken flank bacon. Hamburger pork chop pancetta tongue meatloaf short loin jerky. Ham hock corned beef ball tip, spare ribs drumstick alcatra cow shankle sirloin.
          </p>
        </CompanyBlurb>
        <CompanyBlurb
          imagePath='/assets/images/bn-logo.png'
          imgSize='large'
          company='Beenest Technology Solutions'
          year='20xx - 20xx'
          position='Application Developer'
          backgroundColor={{
            image: '#EF6C00',
            text: '#FB8C00'
          }}>
          <p>
            Bacon ipsum dolor amet ham hock corned beef ribeye sausage andouille, meatloaf strip steak brisket jowl chuck tenderloin swine prosciutto ball tip. Shankle boudin porchetta beef hamburger. Spare ribs meatloaf chicken turkey, short ribs tongue andouille tri-tip burgdoggen turducken flank bacon. Hamburger pork chop pancetta tongue meatloaf short loin jerky. Ham hock corned beef ball tip, spare ribs drumstick alcatra cow shankle sirloin.
          </p>
        </CompanyBlurb>
        <CompanyBlurb
          imagePath='/assets/images/coapp-logo.png'
          imgSize='large'
          company='The Coapperative'
          year='20xx - 20xx'
          position='Senior Front-end Web Developer'
          reversed='computer'
          backgroundColor={{
            image: '#512DA8',
            text: '#673AB7'
          }}>
          <p>
            Bacon ipsum dolor amet ham hock corned beef ribeye sausage andouille, meatloaf strip steak brisket jowl chuck tenderloin swine prosciutto ball tip. Shankle boudin porchetta beef hamburger. Spare ribs meatloaf chicken turkey, short ribs tongue andouille tri-tip burgdoggen turducken flank bacon. Hamburger pork chop pancetta tongue meatloaf short loin jerky. Ham hock corned beef ball tip, spare ribs drumstick alcatra cow shankle sirloin.
          </p>
        </CompanyBlurb>
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
