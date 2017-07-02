import React from 'react'
import Bundle from './Bundle.js'

/* eslint-disable */
import loadApp from 'bundle-loader?lazy!./../containers/App'
import loadHome
  from 'bundle-loader?lazy!./../containers/Home'
import loadAbout
  from 'bundle-loader?lazy!./../containers/About'
import loadContacts
  from 'bundle-loader?lazy!./../containers/Contacts'
import loadNotMatch
  from 'bundle-loader?lazy!./../containers/NotFound'
import loadPortfolio
  from 'bundle-loader?lazy!./../containers/Portfolio'
import loadSkills
  from 'bundle-loader?lazy!./../containers/Skills'
/* eslint-enable */

export const App = ({ children }) => (
  <Bundle load={loadApp}>
    {App => <App children={children} />}
  </Bundle>
)

export const Home = () => (
  <Bundle load={loadHome}>
    {Home => {
      return <Home />
    }}
  </Bundle>
)

export const About = () => (
  <Bundle load={loadAbout}>
    {About => <About />}
  </Bundle>
)

export const Contacts = () => (
  <Bundle load={loadContacts}>
    {Contacts => <Contacts />}
  </Bundle>
)

export const NotFound = () => (
  <Bundle load={loadNotMatch}>
    {NotMatch => <NotMatch />}
  </Bundle>
)

export const Portfolio = () => {
  return (
    <Bundle load={loadPortfolio}>
      {Portfolio => {
        return <Portfolio />
      }}
    </Bundle>
  )
}

export const Skills = () => {
  return (
    <Bundle load={loadSkills}>
      {Skills => {
        return <Skills />
      }}
    </Bundle>
  )
}

/* BUNDLE GENERATOR */
