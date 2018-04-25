import Link from 'gatsby-link'
import React from 'react'

import './index.css'
import logo from './images/logo.png'

const TopNav = () => {
  return (
    <div className="wrapper-masthead">
      <div className="container">
        <header className="masthead clearfix">
          <Link className="link" to="/" className="site-avatar">
            <img src={logo} alt="Site Logo" />
          </Link>

          <div className="site-info">
            <h1 className="site-name">
              <Link className="link" to="/">
                Brooks Becton
              </Link>
            </h1>
            <p className="site-description">Div Slinger in Starkville, MS</p>
          </div>

          <nav>
            <Link className="link" to="/">
              Blog
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default TopNav
