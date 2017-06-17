import React from 'react'
import css from 'styled-components'
import { Element } from 'react-scroll'
import {
  Button,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'

const AboutBlurb = css(Grid)`
  min-height: 20em;
`

const ColorColumn = css(Grid.Column)`
  background-color: ${props => props.color};

  margin-top: 0 !important;
  padding-top: 1em !important;
  margin-bottom: 0 !important;
  padding-bottom: 1em !important;
`

const ParagraphContainer = css.div`
  padding: 0 2em;
  display: block;
`
const SmallBlurb = css(Grid.Column)`
  min-height: 10em;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding-right: 0 !important;
  
  > h2 {
    text-align: center;
  }
`

const ContentBlurb = ({
  floated,
  icon,
  title,
  children
}) => {
  return (
    <Grid centered>
      <Grid.Column
        computer={16}
        widescreen={8}
        textAlign='center'>
        <ParagraphContainer>
          <Header as='h1' inverted>{title}</Header>
          <Icon name={icon} size='massive' inverted />
          <br />
          <br />
          <p>{children}</p>
          <Button inverted basic size='large'>
            More
          </Button>
        </ParagraphContainer>
      </Grid.Column>
    </Grid>
  )
}

//

export default () => {
  return (
    <AboutBlurb centered relaxed>
      <Grid.Row>
        <SmallBlurb
          widescreen={10}
          computer={13}
          textAlign='center'>
          <Element name='about-blurb'>
            <Header as='h2' color='grey'>
              What better way to show you my skills is by writing this neat looking website.
            </Header>
          </Element>
        </SmallBlurb>
      </Grid.Row>
      <Grid.Row>
        <ColorColumn
          computer={8}
          mobile={16}
          color='violet'>
          <ContentBlurb
            title='Who am I'
            icon='user outline'
            floated='right'>
            <p>
              I'm a full-blooded developer from top to bottom. Ever since my third-grade teacher failed me in my computer programing class. I became obsessed in writing code. Ever since them, writing software has been my passion, and now my life-blood.
            </p>
          </ContentBlurb>
        </ColorColumn>
        <ColorColumn computer={8} mobile={16} color='green'>
          <ContentBlurb
            title='Skillset'
            icon='student'
            floated='left'>
            <p>
              I'm a full-blooded developer from top to bottom. Ever since my third-grade teacher failed me in my computer programing class. I became obsessed in writing code. Ever since them, writing software has been my passion, and now my life-blood.
            </p>
          </ContentBlurb>
        </ColorColumn>
      </Grid.Row>
    </AboutBlurb>
  )
}
