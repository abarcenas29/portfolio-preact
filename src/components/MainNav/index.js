/**
*
* MainNav
*
*/
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import css from 'styled-components'

import { Grid, Image } from 'semantic-ui-react'

const Header = css.header`
  color: #FFF;
  display: flex;
  flex-wrap: wrap;
  height: 4em;
  justify-content: space-between;
  margin-top: 1em;
  width: 100%;
`

const BrandContainer = css.div`
  display: flex;
  align-items: center;
  height: inherit;
`

const MenuContainer = css.div`
  display: flex;
  align-items: center;
  height: inherit;
`

const MenuParent = css.ul`
  align-items: center;
  display: flex;
  height: inherit;
  margin: 0;
  padding: 0;

  > li {
    list-style-type: none;
    display: inline-block;
    padding: 0 1em;

    @media only screen and (max-width: 767px) and (min-width: 320px) {
      display: none;
    }

    > a {
      cursor: pointer;
    }
  }
`

const ScrollLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} smooth duration={500} {...props}>
      {children}
    </Link>
  )
}

class MainNav extends Component {
  render () {
    return (
      <Grid columns={1} centered>
        <Grid.Column
          widescreen={10}
          computer={13}
          mobile={16}
          style={{ padding: 0 }}>
          <Header>
            <BrandContainer>
              <Image size='small'>
                <img src='/assets/images/mlogo.svg' />
              </Image>
            </BrandContainer>
            <MenuContainer>
              <MenuParent className='nav-menu'>
                <li>
                  <ScrollLink to='splash-page'>
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to='about-blurb' offset={-75}>
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to='main-portfolio'>
                    Portfolio
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to='contacts'>
                    Contact
                  </ScrollLink>
                </li>
              </MenuParent>
            </MenuContainer>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default MainNav
