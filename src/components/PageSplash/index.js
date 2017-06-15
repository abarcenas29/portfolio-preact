/**
*
* PageSplash
*
*/
import React from 'react'
import css from 'styled-components'

import { Grid, Header } from 'semantic-ui-react'

const PageContainer = css(Grid)`
  height: 20em;
  background-image: url('/assets/images/splash.cover.web.jpg')
  position: relative;
  padding-top: 0 !important;
  background-size: cover;
  background-position: center;
`

const Filter = css.div`
  background-color: rgba(0,0,0,0.5);
  height: inherit;
  position: absolute;
  width: 100%;
`

const PageSplash = () => {
  return (
    <PageContainer centered>
      <Filter />
      <Grid.Column
        widescreen={10}
        computer={13}
        textAlign='center'
        verticalAlign='middle'>
        <div>
          <Header inverted as='h1'>About</Header>
        </div>
      </Grid.Column>
    </PageContainer>
  )
}

export default PageSplash
