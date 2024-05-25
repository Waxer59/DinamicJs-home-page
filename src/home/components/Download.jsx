import './styles/DownloadStyles.css'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BiDownload } from 'react-icons/bi'
import { Element } from 'react-scroll'

export const Download = () => {
  return (
    <section className="download">
      <h2 className="download-title">
        <Element name="download-section" id="download-section">
          Download
        </Element>
      </h2>

      <ul className="download-options">
        <li>
          <p className="download-text">
            You can download the desktop application for Windows, MacOs & Linux
          </p>
          <a
            href="https://github.com/Waxer59/DinamicJs-Desktop/releases"
            target="_blank">
            <BiDownload />
            &nbsp; Download
          </a>
        </li>
        <li>
          <p className="download-text">
            Or if you don't want to install anything you can use the web version
            clicking the button below
          </p>
          <a href="https://dinamicjs.netlify.app/" target="_blank">
            <BsBoxArrowUpRight />
            &nbsp; Web version
          </a>
        </li>
      </ul>
    </section>
  )
}
