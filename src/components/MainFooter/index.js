/**
*
* MainFooter
*
*/
import React from 'react'
import css from 'styled-components'
import { Grid, Icon } from 'semantic-ui-react'

const MainFooter = css(Grid)`
  background-color: #222222;
  color: #9E9E9E;
  padding: 0 !important;

  > div > a {
    font-weight: 700;
    color: #9E9E9E;
    text-decoration: underline;
  }
`

export default () => {
  return (
    <div>
      <MainFooter columns={2} centered padded>
        <Grid.Column computer={7} widescreen={5}>
          <Icon name='copyright' color='grey' />
          {new Date().getFullYear() + ' '}
          By Aldrich Allen Barcenas
        </Grid.Column>
        <Grid.Column
          relaxed
          computer={7}
          widescreen={5}
          textAlign='right'>
          Theme is inspired by
          <a
            href='https://www.famethemes.com/themes/screenr'
            target='_new'>
            {' '}Screenr parallax by FameThemes
          </a>
          {' '}
          and by
          {' '}
          <a href='https://00saad.com' target='_new'>
            00-Sadd
          </a>
        </Grid.Column>
      </MainFooter>
    </div>
  )
}
