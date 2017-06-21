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
  background-image: url('${props => props.backgroundUrl}')
  position: relative;
  padding-top: 0 !important;
  margin: 0 !important;
  background-size: cover;
  background-position: center;
`

const Filter = css.div`
  background-color: rgba(0,0,0,0.5);
  height: inherit;
  position: absolute;
  width: 100%;
`

const PageSplash = ({ title, backgroundUrl }) => {
  return (
    <div>
      <PageContainer
        centered
        relaxed
        backgroundUrl={backgroundUrl}>
        <Filter />
        <Grid.Column
          widescreen={10}
          computer={13}
          tablet={16}
          textAlign='center'
          verticalAlign='middle'>
          <div>
            <Header inverted as='h1'>{title}</Header>
          </div>
        </Grid.Column>
      </PageContainer>
    </div>
  )
}

export default PageSplash
