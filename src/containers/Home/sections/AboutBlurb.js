import React from 'react'
import css from 'styled-components'
import { Grid } from 'semantic-ui-react'

const AboutBlurb = css(Grid)`
  height: 20em;
`

const ColorColumn = css(Grid.Column)`
  background-color: ${props => props.color};
`

export default () => {
  return (
    <AboutBlurb>
      <ColorColumn computer={8} mobile={16} color='yellow'>
        About
      </ColorColumn>
      <ColorColumn computer={8} mobile={16} color='green'>
        Skills
      </ColorColumn>
    </AboutBlurb>
  )
}
