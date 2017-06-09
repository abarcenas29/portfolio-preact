/**
*
* MainFooter
*
*/
import React from 'react'
import css from 'styled-components'
import { Grid } from 'semantic-ui-react'

const MainFooter = css(Grid)`
  background-color: #222222;
`

export default () => {
  return (
    <MainFooter columns={2}>
      <Grid.Column>
        aaa
      </Grid.Column>
      <Grid.Column>
        bbb
      </Grid.Column>
    </MainFooter>
  )
}
