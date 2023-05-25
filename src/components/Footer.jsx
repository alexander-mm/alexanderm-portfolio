import React from 'react'
import github from "../assets/img/contact/github.png"
import linkedin from "../assets/img/contact/linkedin.png"

function Footer() {
  return (
    <footer id="contact">
    <a href=""><img src={github} className="footer-item" alt=""/></a>
    <a href=""><img src={linkedin} className="footer-item" alt=""/></a>
  </footer>
  )
}

export default Footer