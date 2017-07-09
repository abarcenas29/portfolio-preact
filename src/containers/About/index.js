import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import css from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'

import HorizontalTimeline
  from 'components/HorizontalTimeline'

import PageSplash from 'components/PageSplash'
import { NoPaddingGrid } from 'components/CommonJS'
import CompanyBlurb from './sections/CompanyBlurb'

import Waypoint from 'react-waypoint'

import { dimNavMenuAction } from 'containers/App/actions'
import {
  SwitchToLinkAction
} from 'components/MainNav/actions'

const HistoryContainer = css.div`
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
  }
`

const AboutPageContainer = css.div`
  display: flex;
  flex-direction: column;
  width: 1005;
`

class About extends Component {
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

  componentWillMount () {
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
      <AboutPageContainer>
        <Waypoint
          onEnter={this.waypointOnEnter}
          onLeave={this.waypointOnLeave}>
          <div style={{ width: '100%' }}>
            <PageSplash
              title='About'
              backgroundUrl='/assets/images/splash.cover.web.jpg'
            />
          </div>
        </Waypoint>
        <NoPaddingGrid relaxed>
          <Grid.Row centered style={{ margin: 0 }}>
            <Grid.Column
              stretched
              computer={13}
              widescreen={8}
              mobile={16}>
              <br />
              <Header as='h2'>Background</Header>
              <p>
                My passion for computer started when I first failed my computer subject when I was in 3rd grade. Failure isn't new to me. But what I do when it comes to failure is to make sure I understand why I failed and what I can do to fix it. This ended me developing a passion for computers, starting from playing games most of the time (ruining my eyes), to eventually having thinking on how these games are made. While passion for telling the computer what to do. I never see myself developing games. Rather, through the years, I am more interested in developing software that would aid to productivity problems.
              </p>
              <p>
                My start in programing is what I could say humble. Starting from GWBASIC to Turbo Basic in elementary. Moving toward doing simple webpages using Microsoft FrontPage, then in college with c++, eventually landing on Visual Basic as my first preferred language.
              </p>
              <p>
                However, when I joined an Anime website that is ran on Wordpress. I became interested again in learning web programming. My skillset from my high school years aren't exactly on par with the requirement on making a customized Wordpress theme, while I don't want a site that looks like any another site. This where I started learning and understanding the web. Thus, the rest is history.
              </p>
              <br />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered only='computer tablet'>
            <Grid.Column
              only='computer tablet'
              tablet={16}
              computer={13}
              widescreen={8}>
              <Header as='h2'>Work History</Header>
              <HistoryContainer>
                <HorizontalTimeline
                  history={this.state.workHistory}
                />
              </HistoryContainer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column only='mobile'>
              <Header as='h2'>Work History</Header>
            </Grid.Column>
          </Grid.Row>
          <CompanyBlurb
            imagePath='/assets/images/manulife-logo.png'
            company='Manulife Business Processing Services'
            year='2009 - 2011'
            position='IT Specialist'
            backgroundColor={{
              image: '#2E7D32',
              text: '#43A047'
            }}>
            <p>
              Responsible for the day to day managing operation of the IT infrastructure, including all the basic components of LAN such as network operating system, file servers and network communications equipment and computer systems.
            </p>
            <p>
              I also created small tool set for my team to ease our operations. These includes a ticketing system that is runs on sharepoint. A simple inventory system that uses Visual Basic and access to store serial numbers of all our hardware.
            </p>
          </CompanyBlurb>
          <CompanyBlurb
            imagePath='/assets/images/prodigy-logo.png'
            imgSize='medium'
            company='Prodigy Group Philippines'
            year='2011 - 2012'
            position='Business Consulting Manager'
            reversed='computer'
            backgroundColor={{
              image: '#616161',
              text: '#9E9E9E'
            }}>
            <p>
              The first startup company that I joined. I first started as one of their sales team, where I go around and talk to clients selling a Canadian Auditing software. These clients are mostly from big corporations and some are from government agencies. On top of my technical know-how. This also helped me boslter my skills on communicating with people.
            </p>
            <p>
              After a few months, they promoted me as their technical where I support and teach people how to use their software. I also help in creating scripts that will automate their auditing process. Its something similar to COBOL in a way.
            </p>
          </CompanyBlurb>
          <CompanyBlurb
            imagePath='/assets/images/bn-logo.png'
            imgSize='large'
            company='Beenest Technology Solutions'
            year='2012 - 2016'
            position='Application Developer'
            backgroundColor={{
              image: '#EF6C00',
              text: '#FB8C00'
            }}>
            <p>
              My first job where programming is a fulltime job. I mostly work on PHP via FuelPHP. This is my first time being exposed on a development lifecycle. This startup is based on Japan. My boss is Japanese and our clients are Japanese. There's a unique perspective when you develop a system catered to them that breaks some traditions when it comes to design.
            </p>
            <p>
              As for my work there, I've made numerous systems made, from a real state listings site. To the companies consultant-client matching platform. Please see my
              {' '}
              <Link
                style={{
                  color: '#FFF',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
                to='/portfolio'>
                portfolio
              </Link>
              {' '}
              for more info.
            </p>
          </CompanyBlurb>
          <CompanyBlurb
            imagePath='/assets/images/so-logo.svg'
            imgSize='large'
            company='Social Offshore'
            year='2016 - present'
            position='Senior Front-end Web Developer'
            reversed='computer'
            backgroundColor={{
              image: '#2962FF',
              text: '#64B5F6'
            }}>
            <p>
              After staying for four years at Beenest and feeling that I've learned what I can there, I decided move to a UK company called Social Offshore and where I am currently employed. I also switched my skill set from PHP to full NodeJS. Since I've started recently, my first project is for a disaster assessment and disbursement system. Please see my
              {' '}
              <Link
                style={{
                  color: '#FFF',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
                to='/portfolio'>
                portfolio
              </Link>
              {' '}
              for more info.
            </p>
          </CompanyBlurb>
        </NoPaddingGrid>
      </AboutPageContainer>
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
  About
)
