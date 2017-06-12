import React from 'react'
import css from 'styled-components'
import { Element } from 'react-scroll'
import {
  Button,
  Grid,
  Header,
  Icon,
  Image
} from 'semantic-ui-react'

const HomeContainer = css(Grid)`
  height: ${prop => prop.height}px;
  
  background-image: url('/assets/images/splash.cover.web.jpg');
  background-size: cover;

  position: relative;
`

const HeaderTitle = css(Header)`
  margin-top: 0 !important;
`

const Filter = css.div`
  background-color: rgba(0,0,0, 0.5);
  height: inherit;
  position: absolute;
  width: 100%;
`

const SubHeader = css(Header.Subheader)`
  margin-top: 0.5em !important;
`

const ImgReactWordmark = css.img`
  height: 1.5em !important;
  width: inherit !important;
  margin: 0 0.25em;
  margin-bottom: 0.25em;
`

export default ({ height }) => {
  return (
    <Element name='splash-page'>
      <HomeContainer centered height={height}>
        <Filter />
        <Grid.Column
          widescreen={10}
          computer={13}
          textAlign='center'
          verticalAlign='middle'>
          <div>
            <Image size='medium'>
              <img src='/assets/images/MeganeMe.svg' />
            </Image>
            <HeaderTitle as='h1' inverted>
              I write and design
              {' '}
              <ImgReactWordmark src='/assets/images/react-wordmark.png' />
              {' '}
              Apps
              <SubHeader>
                <Button
                  as='a'
                  href='https://github.com/abarcenas29'
                  color='grey'
                  target='_new'>
                  <Icon name='github' />
                  GitHub
                </Button>
                <Button inverted basic>
                  Portfolio
                </Button>
              </SubHeader>
            </HeaderTitle>
          </div>
        </Grid.Column>
      </HomeContainer>
    </Element>
  )
}
