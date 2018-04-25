import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import './index.css'
import BackToTopButton from './../components/BackToTopButton'
import Footer from './../components/Footer'
import TopNav from './../components/TopNav'
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <div id="main" role="main" className="container">
          <TopNav />
          {children()}
          <BackToTopButton />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Template
