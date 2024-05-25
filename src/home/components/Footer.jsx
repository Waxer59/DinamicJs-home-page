import './styles/FooterStyles.css'
import { BsGithub } from 'react-icons/bs'
import { Element } from 'react-scroll'

export const Footer = () => {
  return (
    <footer className="footer">
      <Element id="footer-section" name="footer-section">
        <p className="footer-text">
          Made by{' '}
          <a href="https://github.com/Waxer59" target="_blank">
            <BsGithub />
          </a>
        </p>
      </Element>
    </footer>
  )
}
