import React, { Component } from 'react'
import css from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'

import { defaultAction } from './actions'

import { Grid } from 'semantic-ui-react'
import MainNav from './../../components/MainNav'

const Base = css(Grid)`
  height: inherit;
  flex-direction: column !important;
  position: relative;
`

const FixedHeader = css(Grid.Column)`
  position: absolute;
  top: 0;
`

const Content = css(Grid.Column)`
  flex-grow: 1;
`

class App extends Component {
  componentWillMount () {
    this.props.default({ text: 'I am launched' })

    this.redirect = this.redirect.bind(this)
  }

  redirect (url) {
    this.props.redirect(url)
  }

  render () {
    return (
      <Base relaxed>
        <FixedHeader width={16}>
          <MainNav />
        </FixedHeader>
        <Content width={16}>
          {this.props.children}
        </Content>
        <Grid.Column width={16}>
          <Link to='/about'>About</Link>
          This is the footer
        </Grid.Column>
      </Base>
    )
  }
}

const mapStateToProps = store => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    default: payload => dispatch(defaultAction(payload)),
    redirect: url => dispatch(push(url)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
