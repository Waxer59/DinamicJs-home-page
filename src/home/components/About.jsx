import './styles/AboutStyles.css'
import { Element } from 'react-scroll'

export const About = () => {
  return (
    <section className="about-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="about-svg">
        <path fill="#2c2c2c" d="M0,0L1440,160L1440,320L0,320Z"></path>
      </svg>
      <section className="about">
        <h2 className="about-title">
          <Element id="about-section" name="about-section">
            What is DinamicJs?
          </Element>
        </h2>
        <p className="about-text">
          DinamicJs is a tool in which you can write js and see its execution in
          real time, you can use it in two different ways in web or in a desktop
          application, in the web you can create a link in which all your code
          will be stored and you can download the file you create, and in the
          desktop application you can run javascript code without having to
          access the browser or internet.
        </p>
      </section>
    </section>
  )
}
