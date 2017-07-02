/**
*
* Skills
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

const SkillsPageContainer = css.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SkillsContainer = css.div`
  margin: 0 1em;
`

const UL = css.ul`
  padding-left: 0;
  > li {
    list-style-type: none;
    display: inline-block;
    margin-right: 1em;
  }
`

const Img = ({ src, ...props }) => {
  return (
    <Image {...props}>
      <img src={src} />
    </Image>
  )
}

const Logos = ({ src, ...props }) => {
  return (
    <li>
      <Img src={src} {...props} />
    </li>
  )
}

class Skills extends Component {
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
      <SkillsPageContainer>
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div style={{ width: '100%' }}>
            <PageSplash
              title='Skills'
              backgroundUrl='/assets/images/splash.cover.web.jpg'
            />
          </div>
        </Waypoint>
        <SkillsContainer>
          <br />
          <NoPaddingGrid columns={1} centered>
            <Grid.Column widescreen={8} computer={16}>
              <NoPaddingGrid columns={1} centered>
                <Grid.Column
                  computer={13}
                  widescreen={16}
                  mobile={16}>
                  <p>
                    Bacon ipsum dolor amet pig kevin short loin landjaeger tri-tip turkey. Tail brisket pork belly spare ribs. Venison brisket cupim pork chop. Ground round chuck shoulder swine. Turkey andouille pork, tri-tip capicola beef fatback short ribs ground round jowl pancetta jerky sirloin boudin beef ribs. Prosciutto boudin pork belly, picanha hamburger fatback beef ribs porchetta.
                  </p>
                </Grid.Column>
                <Grid.Column
                  computer={13}
                  widescreen={16}
                  mobile={16}>
                  <Header as='h2'>
                    Front-End Tools/Skills
                  </Header>
                  <Header as='h3'>
                    What I Currently Use
                  </Header>
                  <UL>
                    <Logos
                      src='/assets/images/react.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/redux.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/babel.logo.svg'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/less.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/styled.components.logo.png'
                      size='tiny'
                    />
                    <Logos
                      src='/assets/images/es6.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/semantic-ui.logo.png'
                      size='small'
                    />
                  </UL>
                  <Header as='h3'>
                    What I Had Used
                  </Header>
                  <UL>
                    <Logos
                      src='/assets/images/angular.logo.jpeg'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/uikit.logo.svg'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/jQuery.logo.gif'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/sass.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/coffeescript.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/highcharts.logo.png'
                      size='medium'
                    />
                  </UL>
                  <Header as='h2'>
                    Back-End Tools/Skills
                  </Header>
                  <Header as='h3'>
                    What I Currently Use
                  </Header>
                  <UL>
                    <Logos
                      src='/assets/images/nodejs.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/npm.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/yarn.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/webpack.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/express.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/sequelize.logo.gif'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/passportjs.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/letsencrypt.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/codeship.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/prettier.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/immutable.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/eslint.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/standardjs.logo.gif'
                      size='small'
                    />
                  </UL>
                  <Header as='h3'>
                    What I Had Used
                  </Header>
                  <UL>
                    <Logos
                      src='/assets/images/fuelphp.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/composer.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/bower.logo.gif'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/gulp.logo.png'
                      size='tiny'
                    />
                  </UL>
                  <Header as='h2'>Databases</Header>
                  <UL>
                    <Logos
                      src='/assets/images/postgres.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/mongodb.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/mariadb.logo.png'
                      size='small'
                    />
                  </UL>
                  <Header as='h2'>Platforms</Header>
                  <UL>
                    <Logos
                      src='/assets/images/heroku.logo.svg'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/wordpress.logo.png'
                      size='small'
                    />
                    <Logos
                      src='/assets/images/vps.logo.png'
                      size='small'
                    />
                  </UL>
                  <Header as='h2'>
                    3rd Party Services
                  </Header>
                  <Header as='h2'>Other Tools</Header>
                </Grid.Column>
              </NoPaddingGrid>
            </Grid.Column>
          </NoPaddingGrid>
        </SkillsContainer>
      </SkillsPageContainer>
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
  Skills
)
