import React, { Component } from 'react'
import Elevator from 'elevator.js'
import './index.css'

class BackToTopButton extends Component {
  componentDidMount() {
    // Init ElevatorJS
    this.elevator = new Elevator({
      duration: 1000,
      element: document.querySelector('.backToTop'),
      targetElement: document.querySelector('.wrapper-masthead'),
    })

    //Listening for scroll to display backToTop button
    window.onscroll = () => {
      this.scrollFunction()
    }
  }

  scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector('.backToTop').classList.remove('fadeOut')
      document.querySelector('.backToTop').classList.add('fadeIn')
    } else {
      if (document.querySelector('.backToTop').classList.contains('fadeIn')) {
        document.querySelector('.backToTop').classList.remove('fadeIn')
        document.querySelector('.backToTop').classList.add('fadeOut')
      }
    }
  }

  render() {
    return <button className="backToTop">▲</button>
  }
}

export default BackToTopButton
