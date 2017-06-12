/**
*
* MainNav
*
*/
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import css from 'styled-components'

import {
  Button,
  Grid,
  Image,
  Modal,
  Menu
} from 'semantic-ui-react'

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

  @media only screen and (max-width: 767px) and (min-width: 320px) {
    margin-left: 0.5em;
  }
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

    > a {
        cursor: pointer;
    }
  }

  > li.desktop {
    @media only screen and (max-width: 767px) and (min-width: 320px) {
      display: none;
    }
  }

  > li.mobile {
    display: none;
    @media only screen and (max-width: 767px) and (min-width: 320px) {
      display: inherit;
    }
  }
`
const ModalContent = css(Modal.Content)`
  display: flex !important;
  justify-content: center;
`

const ScrollLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} smooth duration={500} {...props}>
      {children}
    </Link>
  )
}

const ModalNavigation = ({ ...props }) => {
  return (
    <Modal size='small' {...props} basic>
      <ModalContent>
        <Menu vertical>
          <Menu.Item>
            <ScrollLink to='splash-page'>
              Home
            </ScrollLink>
          </Menu.Item>
          <Menu.Item>
            <ScrollLink to='about-blurb' offset={-80}>
              About
            </ScrollLink>
          </Menu.Item>
          <Menu.Item>
            <ScrollLink to='main-portfolio'>
              Portfolio
            </ScrollLink>
          </Menu.Item>
          <Menu.Item>
            <ScrollLink to='contacts'>
              Contacts
            </ScrollLink>
          </Menu.Item>
        </Menu>
      </ModalContent>
    </Modal>
  )
}

class MainNav extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      mobileNavigationState: false
    }

    this.handleNavModal = this.handleNavModal.bind(this)
  }

  handleNavModal (state) {
    this.setState({ mobileNavigationState: state })
  }

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
                <img src='/assets/images/MeganeMe.svg' />
              </Image>
            </BrandContainer>
            <MenuContainer>
              <MenuParent className='nav-menu'>
                <li className='desktop'>
                  <ScrollLink to='splash-page'>
                    Home
                  </ScrollLink>
                </li>
                <li className='desktop'>
                  <ScrollLink to='about-blurb' offset={-75}>
                    About
                  </ScrollLink>
                </li>
                <li className='desktop'>
                  <ScrollLink to='main-portfolio'>
                    Portfolio
                  </ScrollLink>
                </li>
                <li className='desktop'>
                  <ScrollLink to='contacts'>
                    Contact
                  </ScrollLink>
                </li>
                <li className='mobile'>
                  <Button
                    icon='content'
                    basic
                    inverted
                    onClick={() =>
                      this.handleNavModal(true)}
                  />
                  <ModalNavigation
                    open={this.state.mobileNavigationState}
                    onClose={() =>
                      this.handleNavModal(false)}
                  />
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
