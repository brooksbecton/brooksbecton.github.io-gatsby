import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p>
          Written by <strong>Brooks Becton</strong> who lives with his two dogs
          in Mississippi coding, cooking, and relaxing.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
