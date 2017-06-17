import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import css from 'styled-components'

import SplashPage from './sections/SplashPage'
import AboutBlurb from './sections/AboutBlurb'
import MainPortfolios from './sections/MainPortfolios'
import Contacts from './sections/Contacts'

import Waypoint from 'react-waypoint'

import { dimNavMenuAction } from 'containers/App/actions'

import { NoPaddingGrid } from 'components/CommonJS'

class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      browserHeight: null
    }

    this.computeHeight = this.computeHeight.bind(this)
    this.resizeHandle = this.resizeHandle.bind(this)

    this.waypointOnEnter = this.waypointOnEnter.bind(this)
    this.waypointOnLeave = this.waypointOnLeave.bind(this)
  }

  computeHeight () {
    return isNaN(window.innerHeight)
      ? window.clientHeight
      : window.innerHeight
  }

  resizeHandle () {
    this.setState(
      {
        browserHeight: this.computeHeight()
      },
      () =>
        console.log('new height', this.state.browserHeight)
    )
  }

  componentDidMount () {
    this.setState(
      {
        browserHeight: this.computeHeight()
      },
      () => {
        // debounce the resize so not to flood the call stack
        window.addEventListener(
          'resize',
          _.debounce(this.resizeHandle, 500)
        )
      }
    )
  }

  waypointOnEnter () {
    this.props.dimNavMenu(false)
  }

  waypointOnLeave () {
    this.props.dimNavMenu(true)
  }

  componentWillUnmount () {
    window.removeEventListener(
      'resize',
      _.debounce(this.resizeHandle, 500)
    )
  }

  render () {
    const { browserHeight } = this.state
    return (
      <div>
        <Helmet title='MeganeMe - Portfolio Site for Aldrich Allen Barcenas' />
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div>
            <SplashPage height={browserHeight} />
          </div>
        </Waypoint>
        <NoPaddingGrid columns={1} centered relaxed>
          <Grid.Column>
            <AboutBlurb />
          </Grid.Column>
          <Grid.Column computer={13} mobile={16}>
            <MainPortfolios />
          </Grid.Column>
          <Grid.Column>
            <Contacts />
          </Grid.Column>
        </NoPaddingGrid>
      </div>
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
