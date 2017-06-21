/**
*
* Portfolio
*
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from 'styled-components'

import Waypoint from 'react-waypoint'

import { Grid, Header, Image } from 'semantic-ui-react'
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
          <Grid columns={1}>
            <PortfolioItem />
          </Grid>
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
