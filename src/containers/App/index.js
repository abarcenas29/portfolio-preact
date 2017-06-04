import React, { Component } from 'react'
import css from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'

import { defaultAction } from './actions'

import { Grid, Menu, Header } from 'semantic-ui-react'

const Container = css(Grid)`
  height: inherit;
  flex-direction: column !important;
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
      <Container relaxed>
        <Grid.Column width={16}>
          <Menu stackable>
            <Menu.Item>
              <Header as='h1'>Preact Boilerplate</Header>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                link
                onClick={() => this.redirect('/')}>
                Home
              </Menu.Item>
              <Menu.Item
                link
                onClick={() => this.redirect('/about')}>
                About
              </Menu.Item>
              <Menu.Item
                link
                onClick={() => this.redirect('/contact')}>
                Contact
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
        <Content width={16}>
          {this.props.children}
        </Content>
        <Grid.Column width={16}>
          <Link to='/about'>About</Link>
          This is the footer
        </Grid.Column>
      </Container>
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
