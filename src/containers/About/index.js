import React, { Component } from 'react'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'

import HorizontalTimeline
  from 'components/HorizontalTimeline'

const AboutCoverImage = css(Grid.Row)`
  height: 20em;
  background-image: url('/assets/images/splash.cover.web.jpg')
  position: relative;
  padding-top: 0 !important;
  background-size: cover;
  background-position: center;
`

const Filter = css.div`
  background-color: rgba(0,0,0,0.5);
  height: inherit;
  position: absolute;
  width: 100%;
`

const HistoryContainer = css.div`
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Home extends Component {
  render () {
    return (
      <Grid relaxed>
        <AboutCoverImage>
          <Filter />
          <Grid.Column
            width={16}
            verticalAlign='middle'
            textAlign='center'>
            <Header inverted as='h1'>About</Header>
          </Grid.Column>
        </AboutCoverImage>
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
          <Grid.Column
            computer={13}
            widescreen={8}
            mobile={16}>
            <Header as='h2'>Work History</Header>
            <HistoryContainer>
              <HorizontalTimeline />
            </HistoryContainer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
