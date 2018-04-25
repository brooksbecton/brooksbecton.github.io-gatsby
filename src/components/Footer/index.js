import React from 'react'
import twitterLogo from './images/twitter.svg'
import githubLogo from './images/github.svg'
import linkedinLogo from './images/linkedin.svg'
const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="container">
        <footer className="footer">
          <a aria-label="github icon" href="https://github.com/brooksbecton">
            <img className="lazy svg-icon" src={githubLogo} />
          </a>{' '}
          <a
            aria-label="linkedin icon"
            href="https://www.linkedin.com/in/brooksbecton/"
          >
            <img className="lazy svg-icon" src={linkedinLogo} />
          </a>{' '}
          <a aria-label="twitter icon" href="https://twitter.com/YaBoiBrooks">
            <img className="lazy svg-icon" src={twitterLogo} />
          </a>{' '}
        </footer>
      </div>
    </div>
  )
}

export default Footer
