/**
*
* MainNav
*
*/
import React, { Component } from 'react'
import css from 'styled-components'
import { Grid } from 'semantic-ui-react'

const Header = css.header`
  background-color: pink;
  display: flex;
  height: 4em;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
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
  }
`

class MainNav extends Component {
  render () {
    return (
      <Grid columns={1} centered>
        <Grid.Column computer={13}>
          <Header>
            <BrandContainer>
              Brand
            </BrandContainer>
            <MenuContainer>
              <MenuParent>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </MenuParent>
            </MenuContainer>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default MainNav
