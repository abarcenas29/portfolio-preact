import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import _ from 'lodash'
import css from 'styled-components'

import SplashPage from './sections/SplashPage'

const HomeContainer = css(Grid.Column)`
  height: ${prop => prop.height}px;
  background-color: blue;
`

export default class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      browserHeight: null
    }

    this.computeHeight = this.computeHeight.bind(this)
    this.resizeHandle = this.resizeHandle.bind(this)
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

  componentWillUnmount () {
    window.removeEventListener(
      'resize',
      _.debounce(this.resizeHandle, 500)
    )
  }

  render () {
    const { browserHeight } = this.state
    return (
      <Grid>
        <HomeContainer width={16} height={browserHeight}>
          <SplashPage height={browserHeight} />
        </HomeContainer>
      </Grid>
    )
  }
}
